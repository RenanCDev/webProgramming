export function generateTable(data, headers, properties, targetId = "tableContainer") {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const tableHtml = `
        <table>
            <thead>
                <tr>
                    ${headers.map(header => `<th>${header}</th>`).join("")}
                </tr>
            </thead>
            <tbody>
                ${data.map(item => 
                    `<tr>
                        ${properties.map(prop => `<td>${item[prop] || ""}</td>`).join("")}
                    </tr>`
                ).join("\n")}
            </tbody>
        </table>
    `;

    targetElement.innerHTML = tableHtml;
}
