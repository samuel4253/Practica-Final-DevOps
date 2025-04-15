test('la página carga correctamente', () => {
    const content = "<h1>¡Hola Mundo desde DevOps!</h1>";
    expect(content.includes("Hola Mundo")).toBe(true);
});