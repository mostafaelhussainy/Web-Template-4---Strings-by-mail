const createPagination = async (numberOfPages, categoryUrl, displayedResults, nextPage) => {
    if (numberOfPages > 1) {
        const pageUrl = `/categories/${categoryUrl}/`;

        // Create first page button
        addButtonToTargetDiv("1", "#pagination .pages", pageUrl);

        // Create additional page buttons
        const NumberOfPaginationTabs = Math.min(numberOfPages, 3);
        await createAdditionalPageButtons(NumberOfPaginationTabs, categoryUrl);

        // Add event listeners to page buttons
        addPageButtonListeners();

        if (numberOfPages > NumberOfPaginationTabs) {
            // Add previous and next buttons
            addButtonToTargetDiv("Prev", "#pagination", null, "first");
            addButtonToTargetDiv("Next", "#pagination");

            // Add event listeners to previous and next buttons
            addPrevButtonListener();
            addNextButtonListener(NumberOfPaginationTabs, numberOfPages, categoryUrl, displayedResults);
        }
    }
};

const createAdditionalPageButtons = async (numButtons, categoryUrl) => {
    let currentIndex = 2;
    let lastPageUrl = `/categories/${categoryUrl}/`;

    while (numButtons > 1) {
        const newPageUrl = await getPageUrl(lastPageUrl);
        addButtonToTargetDiv(currentIndex, "#pagination .pages", newPageUrl);
        lastPageUrl = newPageUrl;
        currentIndex++;
        numButtons--;
    }
};

const addPageButtonListeners = () => {
    const tabBtns = document.querySelectorAll(".pagination-page");
    tabBtns.forEach(btn => {
        const targetUrl = btn.getAttribute("url");
        btn.addEventListener("click", () => {
            appendingProducts(targetUrl);
        });
    });
};

const addPrevButtonListener = () => {
    const prevBtn = document.querySelector(".action-Prev");
    prevBtn.addEventListener("click", () => {
        if (!prevBtn.disabled) {
            toggleDisablingBtnState(prevBtn, "disabled");
            toggleDisablingBtnState(document.querySelector(".action-Next"), "activated");
            hideLastPageButton();
        }
    });
};

const addNextButtonListener = (numInitialButtons, numPages, categoryUrl, displayedResults) => {
    let remainingPages = numPages - numInitialButtons;
    const nextBtn = document.querySelector(".action-Next");
    nextBtn.addEventListener("click", async () => {
        if (remainingPages > 0 && !nextBtn.disabled) {
            toggleDisablingBtnState(nextBtn, "disabled");
            toggleDisablingBtnState(document.querySelector(".action-Prev"), "activated");
            const newPageUrl = await getPageUrl(numInitialButtons, categoryUrl, displayedResults, nextPage);
            addButtonToTargetDiv(numInitialButtons + 1, "#pagination .pages", newPageUrl);
            addPageButtonListeners();
            remainingPages--;
            if (remainingPages > 0) {
                toggleDisablingBtnState(nextBtn, "activated");
            }
        }
    });
};

const hideLastPageButton = () => {
    const allBtns = document.querySelectorAll(".pages .pagination-page");
    const lastTab = allBtns[allBtns.length - 1];
    lastTab.remove();

    const hiddenTab = allBtns[allBtns.length - 3];
    hiddenTab.style.display = "block";
    if (allBtns.length > 3) {
        toggleDisablingBtnState(document.querySelector(".action-Prev"), "activated");
    }
};
