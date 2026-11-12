/**
 * 財金筆記核心資料集
 * 遵循 AGENTS.md 規範：
 * 1. 一個主題一篇
 * 2. 嚴格概念速查型結構：白話通俗解釋、重點知識純 HTML 圖解、常見應用與案例、潛在風險與注意要點
 * 3. 100% 取材自使用者提供的 4 份原始檔案，零額外臆測與擴充
 */

const FINANCE_NOTES = [
  {
    id: "hedge-fund-deleveraging",
    title: "對沖基金降槓桿與空單回補陷阱",
    category: "市場籌碼與機制",
    tags: ["籌碼面", "量化基金", "空單回補", "短線反彈"],
    updatedAt: "2026-11-12",
    content: {
      summary: "當市場狀況不佳、波動放大時，某些過去表現疲弱的非主流或非 AI 族群（例如車用、消費性半導體）突然逆勢大漲，這通常並非產業基本面好轉或資金良性輪動，而是量化對沖基金（Quantitative）在執行嚴格的多空配置管理，為了降低整體部位與槓桿，在減少多單的同時「被動回補先前的空單」，所形成的短暫上漲假象。",
      keyDiagramHtml: `
        <div class="diagram-wrapper">
          <div class="diagram-header">【核心機制圖解：非主流股逆勢反彈真面目】</div>
          <div class="diagram-flow">
            <div class="flow-card">
              <div class="card-tag">市場環境</div>
              <div class="card-main">大盤狀況不佳<br>波動急遽放大</div>
            </div>
            <div class="flow-arrow">➔</div>
            <div class="flow-card">
              <div class="card-tag">量化對沖基金動作</div>
              <div class="card-main">嚴格多空配置<br>執行降部位 / 降槓桿</div>
            </div>
            <div class="flow-arrow">➔</div>
            <div class="flow-card alert-card">
              <div class="card-tag alert-tag">盤面假象產生</div>
              <div class="card-main alert-main">減少多單 ＋ 回補空單</div>
              <div class="card-sub">非 AI 股短線拉抬（實為空單回補）</div>
            </div>
          </div>
        </div>
      `,
      applications: [
        "盤面資金性質檢驗：在大盤大跌或氣氛轉差時，觀察到非主流半導體逆勢拉升，應優先檢驗其是否為空單部位較高的標的，避免誤當作產業落底訊號。",
        "辨識假性強勢：明白股價表現良好有時只是量化基金降部位平倉的被動結果，而非公司實質基本面或訂單回升。"
      ],
      risks: [
        "誤判為板塊輪動：若誤以為「AI 題材不行了，資金輪動到車用與消費性」而貿然追價，容易在空單回補買盤力竭後遭遇套牢。",
        "短線行情缺乏續航力：空單回補造成的漲勢通常短暫且急促，一旦基金去槓桿完成，股價將迅速回歸原本疲弱的走勢。"
      ]
    }
  },
  {
    id: "margin-call-liquidation",
    title: "融資斷頭與槓桿清洗",
    category: "市場籌碼與機制",
    tags: ["融資", "斷頭", "正2槓桿", "流動性"],
    updatedAt: "2026-11-12",
    content: {
      summary: "當盤勢破底且波動急遽放大時，國際殺盤雖不是專為殺融資而來，但融資維持率偏低的高槓桿部位會因為被迫砍倉而放大跌幅。特別是當融資大量卡在「正2」等槓桿產品時，清洗過程會極其劇烈；但也正是因為高融資部位被迫斷頭趕底，後續跌深反彈時也往往反彈力道最強。",
      keyDiagramHtml: `
        <div class="diagram-wrapper">
          <div class="diagram-header">【融資清洗傳導與趕底機制】</div>
          <div class="diagram-flow">
            <div class="flow-card">
              <div class="card-tag">籌碼結構</div>
              <div class="card-main">融資未減<br>大量卡在「正2」產品</div>
            </div>
            <div class="flow-arrow">➔</div>
            <div class="flow-card">
              <div class="card-tag">盤面破底</div>
              <div class="card-main">觸發維持率警戒<br>高融資部位被迫斷頭</div>
            </div>
            <div class="flow-arrow">➔</div>
            <div class="flow-card alert-card">
              <div class="card-tag alert-tag">趕底與反彈</div>
              <div class="card-main alert-main">融資清洗 ➔ 率先趕底</div>
              <div class="card-sub">跌最深，後續反彈可能漲最多</div>
            </div>
          </div>
        </div>
      `,
      applications: [
        "觀察融資指標：觀察台股與強勢族群（如光通訊）融資退場進度，確認融資是否有效出清，還是仍卡在槓桿部位中。",
        "尋找超跌反彈機會：融資被大量清洗、殺出極端恐慌感的標的，通常跌得最深，反彈時也往往最為凌厲。"
      ],
      risks: [
        "融資未退前抄底過早：若融資持續卡在正2且大盤重殺時仍未減碼，大盤恐面臨漫長的盤跌與二次破底風險。",
        "槓桿踩踏致命傷：在斷頭潮發生時若手握高槓桿多單，極容易在黎明前被直接強制斷頭平倉。"
      ]
    }
  },
  {
    id: "story-to-revenue-realization",
    title: "本夢比轉入營收兌現期",
    category: "市場籌碼與機制",
    tags: ["本夢比", "營收兌現", "估值檢驗", "財報展望"],
    updatedAt: "2026-11-12",
    content: {
      summary: "市場在景氣或題材初期，往往依靠「遍地美好故事」來推升估值與本夢比；但當時間推進到題材成熟期，市場每個人都已經知道這個故事，資金便會由感性轉為理性，要求檢驗實質營收與穩健財務報表。此時即便故事依然動聽，若業績未能如期兌現或高標財測未達，估值就會遭遇無情壓縮。",
      keyDiagramHtml: `
        <div class="diagram-wrapper">
          <div class="diagram-header">【市場階段演變：本夢比 VS 營收兌現】</div>
          <div class="diagram-comparison">
            <div class="comp-col">
              <div class="comp-title">過往階段：本夢比時期</div>
              <div class="comp-item">• 遍地美好故事與願景</div>
              <div class="comp-item">• 不發展 AI 就會被市場懲罰</div>
              <div class="comp-item">• 依靠預期推升估值倍數</div>
            </div>
            <div class="comp-vs">VS</div>
            <div class="comp-col comp-focus">
              <div class="comp-title focus-title">當前階段：營收兌現時期</div>
              <div class="comp-item">• 每個故事大家都已經知道</div>
              <div class="comp-item">• 市場要求財務報表穩健與現金流</div>
              <div class="comp-item">• 數字未達高標即面臨估值壓縮</div>
            </div>
          </div>
        </div>
      `,
      applications: [
        "持股體質檢驗：分清手頭標的處於「推故事」還是「看數字」階段，若進入兌現期，需密切盯緊每季營收與毛利是否符合預期。",
        "挑選精準選股池：在選股池中挑選不僅體質好、且價格已回到合理甚至便宜區的實質獲利股，追強勢股也要有實質業績底氣。"
      ],
      risks: [
        "忽略估值壓縮風險：在兌現期仍用過往本夢比的高倍數給予評價，容易忽視財測稍微未達高標時帶來的估值重殺。",
        "成長率放緩風險：一旦營收成長動能消失或被追趕，過往享受高估值的科技股將首當其衝遭遇拋售。"
      ]
    }
  },
  {
    id: "bullwhip-effect-supply-chain",
    title: "供應鏈長鞭效應（從小料件砍單看警訊）",
    category: "產業鏈與供應鏈",
    tags: ["長鞭效應", "砍單警訊", "小料件", "供應鏈傳導"],
    updatedAt: "2026-11-12",
    content: {
      summary: "產業景氣反轉或需求下修時，下游客戶通常不會立刻砍掉核心主晶片或昂貴零組件，而是優先砍掉違約代價不大、單價較低的小料件、機構件與沖壓件。如果市場持續傳出邊緣非重要料件被砍單，這往往是供應鏈庫存調整的「初步警訊」，隨後極可能如同 2018 與 2022 年般，透過長鞭效應逐步向上傳導至核心主晶片。",
      keyDiagramHtml: `
        <div class="diagram-wrapper">
          <div class="diagram-header">【長鞭效應傳導路徑：從邊緣到核心】</div>
          <div class="diagram-steps">
            <div class="step-card">
              <div class="step-badge">第一步：初期警訊</div>
              <div class="step-desc">砍單代價不大之料件<br><strong>（小料件、機構件、沖壓件）</strong></div>
            </div>
            <div class="step-arrow">➔</div>
            <div class="step-card">
              <div class="step-badge">第二步：長鞭傳導</div>
              <div class="step-desc">持續傳出砍周邊料件<br>蔓延至半成品與模組</div>
            </div>
            <div class="step-arrow">➔</div>
            <div class="step-card alert-card">
              <div class="step-badge alert-tag">第三步：核心引爆</div>
              <div class="step-desc">如 2018、2022 年<br><strong>最終長鞭傳導至核心大廠</strong></div>
            </div>
          </div>
        </div>
      `,
      applications: [
        "掌握先行警訊：留意週邊零組件廠的訂單異動與違約風聲，作為判斷終端需求是否真的無虞的早期雷達。",
        "驗證是否為單一客戶：若小料件砍單後有其他客戶迅速接手則問題不大，若多家同時縮手則需提高警戒。"
      ],
      risks: [
        "輕忽非核心料件砍單：誤以為非核心料件無足輕重，忽略背後代表整體產能拉貨放緩的長鞭連鎖反應。",
        "延遲反應：等到核心大廠正式認領砍單時，股價往往早已先行重挫崩跌。"
      ]
    }
  },
  {
    id: "datacenter-grid-bottleneck",
    title: "AI 資料中心建置瓶頸：電網缺口非政治阻撓",
    category: "產業鏈與供應鏈",
    tags: ["資料中心", "電網缺口", "基礎設施", "軟銀減損"],
    updatedAt: "2026-11-12",
    content: {
      summary: "市場常將 AI 資料中心建置推遲怪罪於選舉後的黨派政爭或政府監管；但實質調研顯示，無論是民主黨或共和黨執政州（如維吉尼亞、亞利桑那），資料中心與晶圓廠擴建均未遭政府阻撓。建置延後的核心物理瓶頸在於「電網基礎設施不到位」與「缺電」，導致算力無法如期交付，軟銀甚至因此單季認列 37 億美元資產減損。",
      keyDiagramHtml: `
        <div class="diagram-wrapper">
          <div class="diagram-header">【資料中心延後原因辨析】</div>
          <div class="diagram-comparison">
            <div class="comp-col">
              <div class="comp-title">市場直覺誤區（非主因）</div>
              <div class="comp-item">• 黨派政權輪替卡關</div>
              <div class="comp-item">• 政府法規監管打壓</div>
              <div class="comp-note">（維州、亞利桑那州皆未受阻撓）</div>
            </div>
            <div class="comp-vs">≠</div>
            <div class="comp-col comp-focus">
              <div class="comp-title focus-title">真實物理瓶頸（核心主因）</div>
              <div class="comp-item">• <strong>電網配電不足與基礎設施不到位</strong></div>
              <div class="comp-item">• 發電機渦輪交付違約</div>
              <div class="comp-item">• 缺電無法交付（例：軟銀認列37億美元減損）</div>
            </div>
          </div>
        </div>
      `,
      applications: [
        "聚焦真實產業瓶頸：評估 AI 產業鏈推展進度時，應將焦點放在電力配套、發電渦輪與電網配電進度，而非政治人物口水。",
        "掌握營收認列節奏：電力卡關主要影響後續年度（如 2028、2029）的營收認列，既有已獲許可並動工之項目 2027 前基本不受阻礙。"
      ],
      risks: [
        "電力延遲引發資產減損：若供電無法按時交付，下游巨頭認列減損後可能進一步收縮硬體資本支出。",
        "誤判解決週期：電力與電網基礎建設週期漫長，非短時間內政策口頭承諾即可立刻解決。"
      ]
    }
  },
  {
    id: "space-ai-server-kessel",
    title: "太空 AI 伺服器（Kessel 概念）",
    category: "產業鏈與供應鏈",
    tags: ["SpaceX", "Kessel", "太空AI", "輝達合作", "籌碼輕"],
    updatedAt: "2026-11-12",
    content: {
      summary: "由 SpaceX 開出規格、將 AI 伺服器發射到太空運行的前沿創新題材（代號 Kessel）。該計畫與輝達展開合作，其供應鏈與傳統地面老 AI 供應鏈有部分重疊，但由於為全新賽道且多數投資人尚未大舉佈局，具備籌碼相對輕、受老 AI 沉重套牢賣壓影響較小的優勢。",
      keyDiagramHtml: `
        <div class="diagram-wrapper">
          <div class="diagram-header">【Kessel 題材三大核心支柱】</div>
          <div class="diagram-flow">
            <div class="flow-card">
              <div class="card-tag">應用規格</div>
              <div class="card-main">SpaceX 發起<br>AI 伺服器打入太空</div>
            </div>
            <div class="flow-arrow">➔</div>
            <div class="flow-card">
              <div class="card-tag">硬體合作</div>
              <div class="card-main">規格已開出<br><strong>與輝達（NVIDIA）合作</strong></div>
            </div>
            <div class="flow-arrow">➔</div>
            <div class="flow-card alert-card">
              <div class="card-tag alert-tag">市場籌碼優勢</div>
              <div class="card-main alert-main">與老 AI 鏈部分重疊</div>
              <div class="card-sub">籌碼相對輕、無歷史重套賣壓</div>
            </div>
          </div>
        </div>
      `,
      applications: [
        "尋找籌碼乾淨的新賽道：在既有 AI 概念股面臨籌碼混亂時，轉向關注低點有撐、連拉數根的太空/衛星重疊標的。",
        "二供驗證機會：AI 稍微中場休息時，採購端有機會趁機驗證能打進新題材的二、三線料件廠商。"
      ],
      risks: [
        "離開便宜區後的追價風險：新題材一旦短線急拉脫離便宜評價區，容易面臨獲利了結震盪。",
        "題材落地時程不確定：太空伺服器技術標準極高，需留意實際開工與量產進度是否如期推展。"
      ]
    }
  },
  {
    id: "negative-bias-rebound-test",
    title: "負乖離過大與季線反彈測試",
    category: "技術分析與盤勢",
    tags: ["乖離率", "季線測試", "跌深反彈", "大頭部風險"],
    updatedAt: "2026-11-12",
    content: {
      summary: "當市場遭遇連續急跌、指數與均線呈現極端負乖離時，短線上往往勝率偏高並高機率引發技術性反彈。然而，急跌反彈的第一道關鍵關卡在於「季線」：必須觀察指數能否在季線上方有效站穩並延續漲勢；若僅僅反彈碰到季線或短暫站上後又立刻破線摔落，就會在形態上形成一個沉重的「大頭部」。",
      keyDiagramHtml: `
        <div class="diagram-wrapper">
          <div class="diagram-header">【極端負乖離與反彈路徑檢驗】</div>
          <div class="diagram-flow">
            <div class="flow-card">
              <div class="card-tag">觸發條件</div>
              <div class="card-main">盤勢一次跌太深<br><strong>呈現極端負乖離</strong></div>
            </div>
            <div class="flow-arrow">➔</div>
            <div class="flow-card">
              <div class="card-tag">短期高機率</div>
              <div class="card-main">技術性超跌反彈<br>（短期勝率高）</div>
            </div>
            <div class="flow-arrow">➔</div>
            <div class="flow-card alert-card">
              <div class="card-tag alert-tag">關鍵檢驗：季線</div>
              <div class="card-main alert-main">能否站穩季線再往上？</div>
              <div class="card-sub">站上去又立刻掉下來 ➔ 形成大頭部</div>
            </div>
          </div>
        </div>
      `,
      applications: [
        "掌握反彈勝率：利用極端負乖離掌握短線反彈獲利，但設定季線作為主要防守與檢驗關卡。",
        "把握反彈拉高現金：跌深反彈的主要目的應是趁反彈將多單減碼、拉高現金儲備，而非盲目期待立即展開全新多頭。"
      ],
      risks: [
        "在季線站穩前太早進場大買：尚未確認反彈延續性就急於押滿部位，極易在「假突破真做頭」時二次受創。",
        "搶反彈不及時停利：將反彈視為全新牛市起點，忽略季線反壓形成的大頭部威力。"
      ]
    }
  },
  {
    id: "strong-stock-trough-test",
    title: "強勢股抗跌檢驗法（未破前波低點）",
    category: "技術分析與盤勢",
    tags: ["強勢股", "前低檢驗", "走勢續強", "籌碼分流"],
    updatedAt: "2026-11-12",
    content: {
      summary: "在大盤經歷大屠殺或劇烈震盪洗盤時，辨識真正強勢股的客觀標準是觀察「前波波段低點是否有守」。例如在 11 月的大回檔中，低點「沒有跌破 7 月低點」的標的，代表籌碼沉澱良好且有實質買盤固守，後續走勢續強的機率相對極高；反之，若摜破 7 月低點，往往意味著波段多頭行情有很高機率已經走完。",
      keyDiagramHtml: `
        <div class="diagram-wrapper">
          <div class="diagram-header">【強勢股前低檢驗準則】</div>
          <div class="diagram-comparison">
            <div class="comp-col comp-focus">
              <div class="comp-title focus-title">強勢股特徵（續強機率高）</div>
              <div class="comp-item">• <strong>11 月低點沒有跌破 7 月低點</strong></div>
              <div class="comp-item">• 抗跌能力強、具備籌碼優勢</div>
              <div class="comp-item">• 大盤止跌時優先領先突圍</div>
            </div>
            <div class="comp-vs">VS</div>
            <div class="comp-col">
              <div class="comp-title">弱勢股特徵（行情恐走完）</div>
              <div class="comp-item">• <strong>跌破 7 月波段關鍵低點</strong></div>
              <div class="comp-item">• 上方累積層層解套賣壓</div>
              <div class="comp-item">• 老黃催化只是加速其原本下跌趨勢</div>
            </div>
          </div>
        </div>
      `,
      applications: [
        "建立客觀強弱濾網：大跌過後，依據「未破 7 月低點」建立強勢股池，優先配置籌碼輕、結構完整的領漲標的。",
        "避開沉重題材：優先避開車子過於沉重的漲價題材，把資金集中在未破低且籌碼乾淨的族群。"
      ],
      risks: [
        "誤將補跌股當強勢股：有些標的僅因延後下跌而暫未破低，需搭配籌碼結構確認是否真的具備買盤支撐。",
        "忽視破前低的危險訊號：一旦原本鎖定的強勢股跌破關鍵低點，必須認清多頭結束的事實，不可戀棧。"
      ]
    }
  },
  {
    id: "poisonous-tree-cut-loss",
    title: "毒樹果理論與果斷停損",
    category: "交易心理與策略",
    tags: ["停損哲學", "風控第一", "慣性改變", "拒絕硬拗"],
    updatedAt: "2026-11-12",
    content: {
      summary: "在交易中，每一次進場買進就像種下一顆種子；一旦發現這筆交易的基礎邏輯有瑕疵、盤勢跌破了持續向上的慣性，或者感覺自己像「扮演小次郎盲目接刀」時，這顆果實就已經帶有毒性。與其期待毒樹結出好果實，唯一正確的做法就是果斷砍掉部位、認賠停損。把風控放在第一位，拒絕犯下不需要去扛風險的錯誤。",
      keyDiagramHtml: `
        <div class="diagram-wrapper">
          <div class="diagram-header">【毒樹果停損決策邏輯】</div>
          <div class="diagram-flow">
            <div class="flow-card">
              <div class="card-tag">進場操作</div>
              <div class="card-main">抄底或嘗試佈局<br>盤勢跌破支撐</div>
            </div>
            <div class="flow-arrow">➔</div>
            <div class="flow-card alert-card">
              <div class="card-tag alert-tag">覺察異常</div>
              <div class="card-main alert-main">突破持續向上慣性</div>
              <div class="card-sub">判定為「毒樹果實」，不可硬拗</div>
            </div>
            <div class="flow-arrow">➔</div>
            <div class="flow-card">
              <div class="card-tag">執行行動</div>
              <div class="card-main"><strong>果斷砍掉部位</strong><br>保留現金，放慢節奏</div>
            </div>
          </div>
        </div>
      `,
      applications: [
        "辨識盤勢慣性改變：當市場一次掉太深且短期拉不起來、突破既有多頭慣性時，立刻啟動防守機制。",
        "雜訊多時放慢節奏：若出現太多改寫原定規劃的劇本、波動過大時，立刻減少交易頻率並提高現金部位。"
      ],
      risks: [
        "沉沒成本硬拗：不願接受分析看錯的事實，持續加碼補倉，最終導致虧損失控。",
        "風控防線崩潰：在已有資產根基時重蹈覆轍，冒著「重新窮回去」的致命風險去賭極端行情。"
      ]
    }
  },
  {
    id: "averaging-down-leverage-risk",
    title: "左側急跌攤平的槓桿風險",
    category: "交易心理與策略",
    tags: ["槓桿風險", "急跌攤平", "V轉陷阱", "部位控管"],
    updatedAt: "2026-11-12",
    content: {
      summary: "過往幾次崩盤經驗容易讓投資人產生「極端行情分三批撿、抄底打 V 轉」的思維定勢；然而當遭遇史詩級的連續殺盤（例如單日大跌 8% 後隔日再跌 12%），過早、過躁進地打入槓桿部位（如槓桿 ETF），將會直接被「扁麻」，導致前面過度躁進、後面真正見底時反而資金耗盡無力再買。",
      keyDiagramHtml: `
        <div class="diagram-wrapper">
          <div class="diagram-header">【連續急跌下的槓桿致命陷阱】</div>
          <div class="diagram-steps">
            <div class="step-card">
              <div class="step-badge">第一階段：太躁進</div>
              <div class="step-desc">以為抓準反彈<br>抄底槓桿 ETF 想要打 V 轉</div>
            </div>
            <div class="step-arrow">➔</div>
            <div class="step-card">
              <div class="step-badge">第二階段：史詩重殺</div>
              <div class="step-desc">單日大跌 8% 後<br>隔日再來一個單日 12%</div>
            </div>
            <div class="step-arrow">➔</div>
            <div class="step-card alert-card">
              <div class="step-badge alert-tag">第三階段：直接扁麻</div>
              <div class="step-desc">前面躁進導致後面無力<br><strong>見底時已無額度再買</strong></div>
            </div>
          </div>
        </div>
      `,
      applications: [
        "嚴格限制曝險規模：搶反彈時部位嚴格限制在總資金的 1~2%，走極端槓鈴策略，絕不隨意放大槓桿。",
        "保留彈性扣打：設定加碼次數上限（例如本週買完就必須保留現金，下週至多一次扣打），杜絕無限向下攤平。"
      ],
      risks: [
        "倒金字塔式攤平：愈跌愈買且部位愈加愈大，在真正的流動性枯竭行情中極易直接爆倉甚至負債。",
        "忽視市場黑天鵝：低估市場連續極端重挫的殺傷力，在第一道反彈失敗後未能及時減碼退場。"
      ]
    }
  },
  {
    id: "real-purchasing-power-erosion",
    title: "實質購買力侵蝕（非農就業與體感落差）",
    category: "總體經濟與指標",
    tags: ["非農就業", "CPI通膨", "實質薪資", "體感經濟", "高利率"],
    updatedAt: "2026-11-12",
    content: {
      summary: "官方公布的非農就業人數大增且失業率維持在低位（4.1%），表面看似經濟韌性十足；然而非農數據僅統計工作崗位數量，現實中許多民眾是因生活成本高昂而增加兼差。同時，名目薪資年增率（3.1%）已顯著落後於住宅與食品推升的通膨增速（CPI 月增 0.4%），導致勞工實質購買力遭受侵蝕，形成「統計數據亮麗、大眾體感極差」的強烈經濟落差。",
      keyDiagramHtml: `
        <div class="diagram-wrapper">
          <div class="diagram-header">【數據與現實體感矛盾解析】</div>
          <div class="diagram-comparison">
            <div class="comp-col">
              <div class="comp-title">官方統計指標表面</div>
              <div class="comp-item">• 非農就業大增 16.5 萬人</div>
              <div class="comp-item">• 失業率降至 4.1%</div>
              <div class="comp-note">（僅統計工作崗位數，包含大量兼差）</div>
            </div>
            <div class="comp-vs">VS</div>
            <div class="comp-col comp-focus">
              <div class="comp-title focus-title">大眾真實生活體感</div>
              <div class="comp-item">• <strong>住宅與食品價格加速上揚</strong></div>
              <div class="comp-item">• 名目薪資年增 3.1% ＜ 通膨</div>
              <div class="comp-item">• <strong>實質購買力遭受嚴重侵蝕</strong></div>
            </div>
          </div>
        </div>
      `,
      applications: [
        "剖析經濟指標本質：解讀非農與失業率時，需搭配實質薪資年增率與兼差人數觀察，避免被單一表面數據誤導。",
        "評估高利率衝擊：理解實質購買力下滑促使房市買方轉向租屋觀望，導致房屋待售量創高、房市量縮價卡。"
      ],
      risks: [
        "誤判實體經濟健康度：僅看就業增長而忽視實質購買力萎縮，若央行因單一通膨月增數據大幅升息，將對放緩中的實體經濟帶來巨大打擊。",
        "忽視通膨累積效應：即便能源價格未惡化，核心通膨的擴散與生活必需品價格高掛仍將持續壓抑消費者實質支出。"
      ]
    }
  }
];
