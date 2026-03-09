var cryptoData = [
    {
        name: "Bitcoin",
        symbol: "BTC",
        price: 97432.56,
        change: 2.45,
        rank: 1,
        marketCap: "1.91T",
        volume: "42.3B",
        supply: "19.8M",
        color: "#f7931a"
    },
    {
        name: "Ethereum",
        symbol: "ETH",
        price: 3847.23,
        change: -1.12,
        rank: 2,
        marketCap: "462B",
        volume: "18.7B",
        supply: "120.2M",
        color: "#627eea"
    },
    {
        name: "BNB",
        symbol: "BNB",
        price: 712.45,
        change: 0.87,
        rank: 3,
        marketCap: "106B",
        volume: "2.1B",
        supply: "149M",
        color: "#f3ba2f"
    },
    {
        name: "Solana",
        symbol: "SOL",
        price: 214.67,
        change: 5.23,
        rank: 4,
        marketCap: "98B",
        volume: "4.5B",
        supply: "441M",
        color: "#9945ff"
    },
    {
        name: "XRP",
        symbol: "XRP",
        price: 2.34,
        change: -0.56,
        rank: 5,
        marketCap: "134B",
        volume: "3.2B",
        supply: "57.2B",
        color: "#00aae4"
    },
    {
        name: "Cardano",
        symbol: "ADA",
        price: 1.12,
        change: 3.78,
        rank: 6,
        marketCap: "39.5B",
        volume: "1.8B",
        supply: "35.4B",
        color: "#0033ad"
    },
    {
        name: "Dogecoin",
        symbol: "DOGE",
        price: 0.4523,
        change: -2.14,
        rank: 7,
        marketCap: "65B",
        volume: "5.1B",
        supply: "143B",
        color: "#c2a633"
    },
    {
        name: "Polkadot",
        symbol: "DOT",
        price: 12.87,
        change: 1.92,
        rank: 8,
        marketCap: "18.2B",
        volume: "890M",
        supply: "1.42B",
        color: "#e6007a"
    }
];

function formatCryptoPrice(price) {
    if (price >= 1000) {
        return "$" + price.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2});
    } else if (price >= 1) {
        return "$" + price.toFixed(2);
    } else {
        return "$" + price.toFixed(4);
    }
}

function renderCryptoCards() {
    var grid = document.getElementById("cryptoGrid");
    if (!grid) return;

    var html = "";

    for (var i = 0; i < cryptoData.length; i++) {
        var coin = cryptoData[i];
        var isPositive = coin.change >= 0;
        var changeClass = isPositive ? "change-positive" : "change-negative";
        var changeSign = isPositive ? "+" : "";
        var arrow = isPositive ? "&#9650;" : "&#9660;";

        html += '<div class="crypto-card">';
        html += '  <div class="crypto-card-header">';
        html += '    <div class="crypto-card-left">';
        html += '      <div class="crypto-icon" style="background-color:' + coin.color + '">' + coin.symbol.charAt(0) + '</div>';
        html += '      <div>';
        html += '        <div class="crypto-name">' + coin.name + '</div>';
        html += '        <div class="crypto-symbol">' + coin.symbol + '</div>';
        html += '      </div>';
        html += '    </div>';
        html += '    <span class="crypto-rank">#' + coin.rank + '</span>';
        html += '  </div>';
        html += '  <div class="crypto-price">' + formatCryptoPrice(coin.price) + '</div>';
        html += '  <div class="crypto-change ' + changeClass + '">' + arrow + ' ' + changeSign + coin.change.toFixed(2) + '%</div>';
        html += '  <div class="crypto-details">';
        html += '    <div class="crypto-detail-item">';
        html += '      <div class="crypto-detail-label">Market Cap</div>';
        html += '      <div class="crypto-detail-value">$' + coin.marketCap + '</div>';
        html += '    </div>';
        html += '    <div class="crypto-detail-item">';
        html += '      <div class="crypto-detail-label">Volume 24h</div>';
        html += '      <div class="crypto-detail-value">$' + coin.volume + '</div>';
        html += '    </div>';
        html += '    <div class="crypto-detail-item">';
        html += '      <div class="crypto-detail-label">Supply</div>';
        html += '      <div class="crypto-detail-value">' + coin.supply + '</div>';
        html += '    </div>';
        html += '  </div>';
        html += '</div>';
    }

    grid.innerHTML = html;
}

renderCryptoCards();
