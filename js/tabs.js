export function handlerTabs(tabList, tabContents) {

    tabList.forEach(onClickTab)

    function onClickTab(item) {
        item.addEventListener('click', function() {
            let currentBtn = item
            let tabId = item.getAttribute('data-tab')
            let currentTab = document.querySelector(tabId)

            if(!currentBtn.classList.contains('active')) {
                tabList.forEach(tab => {
                    tab.classList.remove('active')
                })

                tabContents.forEach(content => {
                    content.classList.remove('active')
                })

                currentTab.classList.add('active')
                currentBtn.classList.add('active')
            }
        })
    }
}