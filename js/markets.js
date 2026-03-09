var stocksData = [
    {
        symbol: "AAPL",
        name: "Apple Inc.",
        price: 198.45,
        change: 2.34,
        changePercent: 1.19,
        marketCap: "3.09T",
        color: "#555555"
    },
    {
        symbol: "MSFT",
        name: "Microsoft Corp.",
        price: 452.78,
        change: -1.56,
        changePercent: -0.34,
        marketCap: "3.37T",
        color: "#00a4ef"
    },
    {
        symbol: "GOOGL",
        name: "Alphabet Inc.",
        price: 176.23,
        change: 3.12,
        changePercent: 1.80,
        marketCap: "2.18T",
        color: "#4285f4"
    },
    {
        symbol: "AMZN",
        name: "Amazon.com Inc.",
        price: 213.67,
        change: -0.89,
        changePercent: -0.41,
        marketCap: "2.21T",
        color: "#ff9900"
    },
    {
        symbol: "TSLA",
        name: "Tesla Inc.",
        price: 287.54,
        change: 8.76,
        changePercent: 3.14,
        marketCap: "913B",
        color: "#cc0000"
    },
    {
        symbol: "NVDA",
        name: "NVIDIA Corp.",
        price: 924.56,
        change: 15.23,
        changePercent: 1.67,
        marketCap: "2.28T",
        color: "#76b900"
    },
    {
        symbol: "META",
        name: "Meta Platforms",
        price: 567.89,
        change: -4.32,
        changePercent: -0.76,
        marketCap: "1.44T",
        color: "#1877f2"
    },
    {
        symbol: "JPM",
        name: "JPMorgan Chase",
        price: 198.34,
        change: 1.45,
        changePercent: 0.74,
        marketCap: "571B",
        color: "#003087"
    }
];

function renderMarketTable() {
    var tableBody = document.getElementById("marketTableBody");
    if (!tableBody) return;

    var html = "";

    for (var i = 0; i < stocksData.length; i++) {
        var stock = stocksData[i];
        var isPositive = stock.change >= 0;
        var changeClass = isPositive ? "change-positive" : "change-negative";
        var changeSign = isPositive ? "+" : "";

        html += '<tr>';
        html += '  <td>';
        html += '    <div class="asset-name">';
        html += '      <div class="asset-icon" style="background-color:' + stock.color + '">' + stock.symbol.charAt(0) + '</div>';
        html += '      <div>';
        html += '        <div class="asset-symbol">' + stock.symbol + '</div>';
        html += '        <div class="asset-fullname">' + stock.name + '</div>';
        html += '      </div>';
        html += '    </div>';
        html += '  </td>';
        html += '  <td>$' + stock.price.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + '</td>';
        html += '  <td class="' + changeClass + '">' + changeSign + stock.changePercent.toFixed(2) + '%</td>';
        html += '  <td>$' + stock.marketCap + '</td>';
        html += '</tr>';
    }

    tableBody.innerHTML = html;
}

renderMarketTable();
