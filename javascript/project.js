document.addEventListener("DOMContentLoaded", function active_subSection() {
    // 초기에 첫 번째 섹션을 활성화
    activate_subSection("allProject");

    // 각 메뉴를 클릭했을 때 해당 섹션을 활성화
    document.querySelectorAll("li a").forEach(function (menuLink) {
        menuLink.addEventListener("click", function (event) {
            event.preventDefault();

            // 클릭한 메뉴에 해당하는 섹션 활성화
            var targetSectionId = menuLink.getAttribute("data-target");
            activate_subSection(targetSectionId);
        });
    });

    // 섹션을 활성화하는 함수
    function activate_subSection(sectionId) {
        // 모든 섹션 비활성화
        document.querySelectorAll("section").forEach(function (section) {
            section.classList.remove("active");
        });

        // 클릭한 메뉴에 해당하는 섹션 활성화
        document.getElementById(sectionId).classList.add("active");

        // 해당 섹션에 HTML 파일 불러오기
        fetch_subSectionContent(sectionId);
    }

    // 섹션에 HTML 파일을 불러오는 함수
    function fetch_subSectionContent(sectionId) {
        var sectionContainer = document.getElementById(sectionId);
        var url = sectionId + ".html"; // HTML 파일 경로


        fetch_sub(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (html) {
                sectionContainer.innerHTML = html;
            })
            .catch(function (error) {
                console.error("Error fetching section content:", error);
            });
    }
});