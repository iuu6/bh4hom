async function loadContactLog() {
    try {
        const response = await fetch('contacts.csv');
        const text = await response.text();
        const lines = text.trim().split('\n');
        
        if (lines.length <= 1) return;
        
        const tbody = document.getElementById('logBody');
        tbody.innerHTML = '';
        
        for (let i = 1; i < lines.length; i++) {
            const cols = lines[i].split(',').map(col => col.trim());
            if (cols.length < 11) continue;
            
            const row = tbody.insertRow();
            row.innerHTML = `
                <td>${cols[0]}</td>
                <td><strong>${cols[1]}</strong></td>
                <td>${cols[2]}</td>
                <td>${cols[3]}</td>
                <td>${cols[4]} / ${cols[5]}</td>
                <td>${cols[6]} / ${cols[7]}</td>
                <td>${cols[8]}</td>
                <td>${cols[9]}</td>
                <td>${cols[10]}</td>
                <td>${cols[11] || '-'}</td>
                <td>${cols[12] || '-'}</td>
            `;
        }
    } catch (error) {
        console.log('No contact log file found');
    }
}

loadContactLog();
