import React from "react";

function Header({isDarkMode, onDarkModeClick}) {

    function handleDark() {
        onDarkModeClick();
    }

    return (<header>
        <h2>Shopster</h2>
        <button onClick={handleDark}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>);
}

export default Header;