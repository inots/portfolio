const themes = [
    {
        id: 0,
        title: "Dark Theme",
        bg_color: "#000",
        fg_color: "#abcdef",
        color_a: "#abcdef",
        color_b: "#abcdef",
    },
    {
        id: 1,
        title: "Light Theme",
        bg_color: "#a3b18a",
        fg_color: "#abcdef",
        color_a: "#abcdef",
        color_b: "#abcdef",
    },
    {
        id: 2,
        title: "Fun Theme",
        bg_color: "#ffa700",
        fg_color: "#abcdef",
        color_a: "#abcdef",
        color_b: "#abcdef",
    },
]

export function getAllThemes() {
    return themes;
}
