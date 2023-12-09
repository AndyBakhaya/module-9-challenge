function renderLicenseBadge(result) {
    if(result.license === "MIT") {
        return "<img src='https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge'>"
    }
    else if(result.license === 'Mozilla') {
        return "<img src='https://img.shields.io/badge/License-MPL_2.0-FF7139.svg?style=for-the-badge'>"
    }
    else if(result.license === 'Apache 2.0') {
        return "<img src='https://img.shields.io/badge/License-Apache_2.0-D22128?style=for-the-badge'>"
    }
    else {
        return ""
    }
}


function renderLicenseLink(result) {
    if(result.license === "MIT") {
        return "<img src='https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge'>"
    }
    else if(result.license === 'Mozilla') {
        return "<img src='https://img.shields.io/badge/License-MPL_2.0-FF7139.svg?style=for-the-badge'>"
    }
    else if(result.license === 'Apache 2.0') {
        return "<img src='https://img.shields.io/badge/License-Apache_2.0-D22128?style=for-the-badge'>"
    }
    else {
        return ""
    }
}

function generateMarkdown(result) {
    
}