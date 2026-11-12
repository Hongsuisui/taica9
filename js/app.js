/**
 * 個人財金筆記網站 - 前端互動邏輯
 * 遵循 AGENTS.md 規範：
 * - 純原生 Vanilla JavaScript，無任何外部相依性
 * - 支援即時關鍵字搜尋、主題分類篩選、單頁無刷新切換
 * - 支援 URL Hash 錨點直接連結筆記
 */

document.addEventListener("DOMContentLoaded", () => {
  // 檢查資料是否存在
  if (typeof FINANCE_NOTES === "undefined" || !Array.isArray(FINANCE_NOTES)) {
    console.error("FINANCE_NOTES 資料未載入，請確認 js/notes-data.js 是否正確引用。");
    return;
  }

  // 狀態管理
  let activeCategory = "ALL";
  let searchQuery = "";
  let activeNoteId = FINANCE_NOTES[0]?.id || null;

  // DOM 元素快取
  const searchInput = document.getElementById("searchInput");
  const categoryFilters = document.getElementById("categoryFilters");
  const notesList = document.getElementById("notesList");
  const notesCount = document.getElementById("notesCount");
  const noteContentContainer = document.getElementById("noteContentContainer");
  const menuToggleBtn = document.getElementById("menuToggleBtn");
  const sidebar = document.getElementById("sidebar");

  // 初始化分類篩選器標籤
  function initCategories() {
    const categories = Array.from(new Set(FINANCE_NOTES.map(note => note.category)));
    categoryFilters.innerHTML = "";

    // "全部" 標籤
    const allPill = document.createElement("button");
    allPill.className = `filter-pill ${activeCategory === "ALL" ? "active" : ""}`;
    allPill.textContent = "全部";
    allPill.addEventListener("click", () => {
      activeCategory = "ALL";
      updateCategoryActiveState();
      renderNotesList();
    });
    categoryFilters.appendChild(allPill);

    // 各個別分類標籤
    categories.forEach(cat => {
      const pill = document.createElement("button");
      pill.className = `filter-pill ${activeCategory === cat ? "active" : ""}`;
      pill.textContent = cat;
      pill.addEventListener("click", () => {
        activeCategory = cat;
        updateCategoryActiveState();
        renderNotesList();
      });
      categoryFilters.appendChild(pill);
    });
  }

  // 更新分類標籤 active 樣式
  function updateCategoryActiveState() {
    const pills = categoryFilters.querySelectorAll(".filter-pill");
    pills.forEach(pill => {
      if (pill.textContent === "全部") {
        pill.classList.toggle("active", activeCategory === "ALL");
      } else {
        pill.classList.toggle("active", pill.textContent === activeCategory);
      }
    });
  }

  // 取得過濾後的筆記
  function getFilteredNotes() {
    const query = searchQuery.trim().toLowerCase();
    return FINANCE_NOTES.filter(note => {
      // 分類篩選
      const matchesCategory = activeCategory === "ALL" || note.category === activeCategory;
      if (!matchesCategory) return false;

      // 搜尋關鍵字比對（標題、分類、標籤、摘要）
      if (!query) return true;
      const titleMatch = note.title.toLowerCase().includes(query);
      const catMatch = note.category.toLowerCase().includes(query);
      const tagsMatch = note.tags.some(tag => tag.toLowerCase().includes(query));
      const summaryMatch = note.content.summary.toLowerCase().includes(query);
      return titleMatch || catMatch || tagsMatch || summaryMatch;
    });
  }

  // 渲染左側筆記清單
  function renderNotesList() {
    const filtered = getFilteredNotes();
    notesList.innerHTML = "";
    notesCount.textContent = `${filtered.length} / ${FINANCE_NOTES.length}`;

    if (filtered.length === 0) {
      notesList.innerHTML = `
        <li class="empty-state">
          <div class="empty-state-title">無相符筆記</div>
          <div>請嘗試更換關鍵字或分類標籤</div>
        </li>
      `;
      return;
    }

    filtered.forEach(note => {
      const li = document.createElement("li");
      li.className = `note-item ${note.id === activeNoteId ? "active" : ""}`;
      li.dataset.id = note.id;

      li.innerHTML = `
        <div class="note-item-top">
          <span class="note-item-category">${escapeHtml(note.category)}</span>
          <span class="note-item-date">${escapeHtml(note.updatedAt)}</span>
        </div>
        <div class="note-item-title">${escapeHtml(note.title)}</div>
        <div class="note-item-snippet">${escapeHtml(note.content.summary)}</div>
      `;

      li.addEventListener("click", () => {
        selectNote(note.id);
        // 行動端選取後自動關閉抽屜選單
        if (window.innerWidth <= 860) {
          sidebar.classList.remove("open");
          menuToggleBtn.textContent = "☰ 目錄";
        }
      });

      notesList.appendChild(li);
    });
  }

  // 選取並渲染單篇筆記
  function selectNote(noteId) {
    const note = FINANCE_NOTES.find(n => n.id === noteId);
    if (!note) return;

    activeNoteId = note.id;
    window.location.hash = note.id;

    // 更新列表 active 樣式
    const allItems = notesList.querySelectorAll(".note-item");
    allItems.forEach(item => {
      item.classList.toggle("active", item.dataset.id === note.id);
    });

    renderNoteDetail(note);

    // 閱讀區滾動回頂部
    const mainContent = document.getElementById("mainContent");
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
  }

  // 渲染右側詳細閱讀內容
  function renderNoteDetail(note) {
    const tagsHtml = note.tags
      .map(tag => `<span class="meta-tag">#${escapeHtml(tag)}</span>`)
      .join("");

    const applicationsHtml = note.content.applications
      .map(app => `<li class="styled-list-item">${escapeHtml(app)}</li>`)
      .join("");

    const risksHtml = note.content.risks
      .map(risk => `<li class="styled-list-item risk-list-item">${escapeHtml(risk)}</li>`)
      .join("");

    noteContentContainer.innerHTML = `
      <header class="note-header">
        <div class="note-meta">
          <span class="meta-category">${escapeHtml(note.category)}</span>
          ${tagsHtml}
          <span class="meta-date">更新日期：${escapeHtml(note.updatedAt)}</span>
        </div>
        <h1 class="note-title">${escapeHtml(note.title)}</h1>
      </header>

      <!-- 段落 1: 白話通俗解釋 -->
      <section class="section-block">
        <h2 class="section-label">一、白話通俗解釋</h2>
        <p class="prose-text">${escapeHtml(note.content.summary)}</p>
      </section>

      <!-- 重點知識純 HTML 圖解 -->
      <section class="section-block">
        <h2 class="section-label">二、重點知識圖解</h2>
        <div class="note-diagram-container">
          ${note.content.keyDiagramHtml}
        </div>
      </section>

      <!-- 段落 2: 常見應用與案例 -->
      <section class="section-block">
        <h2 class="section-label">三、常見應用與案例</h2>
        <ul class="styled-list">
          ${applicationsHtml}
        </ul>
      </section>

      <!-- 段落 3: 潛在風險與注意要點 -->
      <section class="section-block">
        <h2 class="section-label">四、潛在風險與注意要點</h2>
        <ul class="styled-list">
          ${risksHtml}
        </ul>
      </section>

      <footer class="reader-footer">
        <span>遵循 AGENTS.md 零框架靜態架構</span>
        <span>資料來源：個人財金研析筆記庫</span>
      </footer>
    `;
  }

  // 簡單的 HTML 特殊字元跳脫函式，防止 XSS
  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // 搜尋輸入事件（即時過濾）
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderNotesList();
  });

  // 行動端選單開關
  menuToggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuToggleBtn.textContent = sidebar.classList.contains("open") ? "✕ 關閉" : "☰ 目錄";
  });

  // URL Hash 支援直接跳轉指定筆記
  function checkUrlHash() {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const targetNote = FINANCE_NOTES.find(n => n.id === hash);
      if (targetNote) {
        selectNote(targetNote.id);
        return;
      }
    }
    // 預設選取第一篇
    if (FINANCE_NOTES.length > 0) {
      selectNote(FINANCE_NOTES[0].id);
    }
  }

  // 初始化啟動
  initCategories();
  renderNotesList();
  checkUrlHash();

  // 監聽瀏覽器上一頁/下一頁
  window.addEventListener("hashchange", checkUrlHash);
});
