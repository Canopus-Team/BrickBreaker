function getLevel(level) {
    if(level == 1){
        return [
            ["empty", "empty", "red", "empty", "empty", "empty", "empty", "red", "empty", "empty"],
            ["empty", "red", "empty", "empty", "purple", "yellow", "empty", "empty", "red", "empty"],
            ["red", "empty", "empty", "empty", "yellow", "purple", "empty", "empty", "empty", "red"],
            ["empty", "red", "empty", "empty", "purple", "yellow", "empty", "empty", "red", "empty"],
            ["empty", "empty", "red", "empty", "empty", "empty", "empty", "red", "empty", "empty"]
        ];
    }
    else if(level == 2){
        return [
            ["red", "empty", "red", "empty", "empty", "empty", "empty", "red", "empty", "red"],
            ["empty", "red", "empty", "empty", "purple", "yellow", "empty", "empty", "red", "empty"],
            ["red", "empty", "yellow", "purple", "yellow", "purple", "purple", "yellow", "empty", "red"],
            ["empty", "red", "empty", "empty", "purple", "yellow", "empty", "empty", "red", "empty"],
            ["red", "empty", "red", "empty", "empty", "empty", "empty", "red", "empty", "red"]
        ];
    }
}

