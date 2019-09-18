document.addEventListener('DOMContentLoaded', function () {
    const teamList = document.querySelector("#teamList ul")

    teamList.addEventListener('click', function (deleteCharacter) {
        if (deleteCharacter.target.className == 'remove') {
            const li = deleteCharacter.target.parentElement;
            teamList.removeChild(li);
        }
    });

    const addOriginalCharacter = document.forms['originalCharacter'];
    addOriginalCharacter.addEventListener('submit', function (originalCharacter) {
        originalCharacter.preventDefault();

        const value = addOriginalCharacter.querySelector('input[type="text"]').value;
        const li = document.createElement('li');
        const characterName = document.createElement('span');
        const removeButton = document.createElement('span');

        characterName.textContent = value;
        removeButton.textContent = 'Remove';

        characterName.classList.add('className');
        removeButton.classList.add('remove');

        li.appendChild(characterName);
        li.appendChild(removeButton);
        teamList.appendChild(li);
        addOriginalCharacter.querySelector('input').value = "";
    });

    //place drop down into HTML
    var rpg = {
        classes: [
            ['Paladin', 'Dark Knight', 'Dragoon'],
            ['Warlock', 'White Mage', 'Necromancer'],
            ['Thief', 'Ninja', 'Pirate'],
            ['Priest', 'Shaman', 'Alchemist'],
            ['Archer', 'Beast Master', 'Gunman']],
        listCharacters: function () {
            var characterList = "<select id ='selectedCharacter'>";
            for (var i = 0; i < this.classes.length; i++) {
                for (var j = 0; j < this.classes[i].length; j++) {
                    characterList += "<option>" + this.classes[i][j] + "</option>";
                }
            }
            characterList += "</select>";
            document.getElementById("characterDropDownList").innerHTML = characterList;
        },
    };
    rpg.listCharacters();

    const addPremadeCharacter = document.forms['characterDropDown'];
    addPremadeCharacter.addEventListener('submit', function (premadeCharacter) {
        premadeCharacter.preventDefault();

        const value = document.querySelector('#selectedCharacter').value;
        const li = document.createElement('li');
        const characterName = document.createElement('span');
        const removeButton = document.createElement('span');

        characterName.textContent = value;
        removeButton.textContent = 'Remove';

        characterName.classList.add('className');
        removeButton.classList.add('remove');

        li.appendChild(characterName);
        li.appendChild(removeButton);
        teamList.appendChild(li);
    });

    function hideButtonWhenTeamFull() {
        const teamCount = document.querySelector("#teamList ul").childElementCount
        const hideButton = document.querySelector('#beginAdventure');
        if (teamCount <= 5) {
            hideButton.style.visibility = "hidden";
        } else { hideButton.style.visibility = "visible"; }
    };

    hideButtonWhenTeamFull();
});