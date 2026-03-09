var newsData = [
    {
        title: "Bitcoin Surges Past $97,000 as Institutional Demand Grows",
        excerpt: "Bitcoin has reached new highs as major financial institutions continue to increase their crypto holdings. Analysts predict further growth driven by ETF inflows and regulatory clarity.",
        tag: "crypto",
        tagLabel: "Crypto",
        source: "CryptoNews",
        date: "Mar 7, 2026",
        icon: "&#128200;"
    },
    {
        title: "Federal Reserve Signals Potential Rate Cuts in Q2 2026",
        excerpt: "The Federal Reserve has indicated it may lower interest rates in the coming months, citing improved inflation data and a stable labor market. Markets rallied on the news.",
        tag: "market",
        tagLabel: "Market",
        source: "MarketWatch",
        date: "Mar 6, 2026",
        icon: "&#127970;"
    },
    {
        title: "Solana Ecosystem Sees Record Developer Activity",
        excerpt: "The Solana blockchain has recorded its highest-ever developer activity, with over 2,500 active projects. DeFi and NFT applications continue to drive growth on the network.",
        tag: "crypto",
        tagLabel: "Crypto",
        source: "BlockchainDaily",
        date: "Mar 6, 2026",
        icon: "&#128187;"
    },
    {
        title: "EU Approves New Digital Asset Regulation Framework",
        excerpt: "The European Union has passed comprehensive legislation to regulate digital assets, providing clear guidelines for exchanges, stablecoins, and DeFi protocols operating within the EU.",
        tag: "regulation",
        tagLabel: "Regulation",
        source: "Reuters",
        date: "Mar 5, 2026",
        icon: "&#9878;"
    },
    {
        title: "NVIDIA Reports Record Revenue Driven by AI Chip Demand",
        excerpt: "NVIDIA's quarterly earnings exceeded expectations with record revenue of $38 billion, fueled by unprecedented demand for AI training and inference chips from tech companies.",
        tag: "market",
        tagLabel: "Market",
        source: "TechCrunch",
        date: "Mar 5, 2026",
        icon: "&#128736;"
    },
    {
        title: "Ethereum Layer 2 Networks Process More Transactions Than Mainnet",
        excerpt: "For the first time, Ethereum Layer 2 solutions collectively processed more daily transactions than the Ethereum mainnet, signaling the success of the scaling roadmap.",
        tag: "analysis",
        tagLabel: "Analysis",
        source: "The Block",
        date: "Mar 4, 2026",
        icon: "&#128202;"
    }
];

function renderNewsCards() {
    var grid = document.getElementById("newsGrid");
    if (!grid) return;

    var html = "";

    for (var i = 0; i < newsData.length; i++) {
        var article = newsData[i];

        html += '<div class="news-card">';
        html += '  <div class="news-image">';
        html += '    <span class="news-icon">' + article.icon + '</span>';
        html += '  </div>';
        html += '  <div class="news-body">';
        html += '    <span class="news-tag ' + article.tag + '">' + article.tagLabel + '</span>';
        html += '    <h3 class="news-title">' + article.title + '</h3>';
        html += '    <p class="news-excerpt">' + article.excerpt + '</p>';
        html += '    <div class="news-footer">';
        html += '      <span class="news-source">' + article.source + '</span>';
        html += '      <span class="news-date">' + article.date + '</span>';
        html += '    </div>';
        html += '  </div>';
        html += '</div>';
    }

    grid.innerHTML = html;
}

renderNewsCards();
