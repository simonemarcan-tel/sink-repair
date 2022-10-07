
import { getRequests } from "./dataAccess.js"


const buildRequestListItem = (request) => {
    return `<li>
    Request #${request.id} was placed on ${request.timestamp}
    </li>`
}

export const Requests = () => {
    const requests = getRequests()

    let html = "<ul>"
    const listItems = requests.map(buildRequestListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}



