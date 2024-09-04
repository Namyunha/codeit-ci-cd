it("validates text and anchor in the homepage", () => {
  // 기본 경로('/')로 이동
  cy.visit("/");

  // 특정 경로에 "Get started by" 텍스트가 있는지 확인
  cy.contains("Get started by").should("exist");

  // "Docs"라는 텍스트를 포함하는 h2를 가진 a 태그를 정확하게 선택
  cy.get("a h2", { timeout: 10000 }) // 타임아웃을 10초로 늘림
    .contains("Docs"); // h2 태그 안에 "Docs" 텍스트가 있는지 확인
});
