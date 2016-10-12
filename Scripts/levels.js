const Levels  = [getFirstLevel(), getSecondLevel()];
function getFirstLevel() {
    return [
        ["empty", "empty", "red", "empty", "empty", "empty", "empty", "red", "empty", "empty"],
        ["empty", "red", "empty", "empty", "purple", "yellow", "empty", "empty", "red", "empty"],
        ["red", "empty", "empty", "empty", "yellow", "purple", "empty", "empty", "empty", "red"],
        ["empty", "red", "empty", "empty", "purple", "yellow", "empty", "empty", "red", "empty"],
        ["empty", "empty", "red", "empty", "empty", "empty", "empty", "red", "empty", "empty"]
    ];
}

function getSecondLevel() {
    return [
        ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red"],
        ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red"],
        ["purple", "empty", "purple", "empty", "purple", "empty", "purple", "empty", "purple", "empty"],
        ["empty", "red", "empty", "red", "empty", "red", "empty", "red", "empty", "red"],
        ["yellow", "empty", "yellow", "empty", "yellow", "empty", "yellow", "empty", "yellow", "empty"]
    ];
}

