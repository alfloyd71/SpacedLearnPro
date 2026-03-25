// Tally boxes - counts cards in each box and updates navigation badges
const tallyBoxes = (mycards) => {
    let tally_box1 = 0
    let tally_box2 = 0
    let tally_box3 = 0
    let tally_box4 = 0
    let tally_box5 = 0

    for (let i = 0; i < mycards.length; i++) {
        switch (mycards[i]['box']) {
            case 1:
                tally_box1 += 1
                break
            case 2:
                tally_box2 += 1
                break
            case 3:
                tally_box3 += 1
                break
            case 4:
                tally_box4 += 1
                break
            case 5:
                tally_box5 += 1
                break
        }
    }

    // Update badge counts in navigation
    const badge_box1 = document.getElementById("badge-box1")
    const badge_box2 = document.getElementById("badge-box2")
    const badge_box3 = document.getElementById("badge-box3")
    const badge_box4 = document.getElementById("badge-box4")
    const badge_box5 = document.getElementById("badge-box5")

    if (badge_box1) badge_box1.textContent = tally_box1
    if (badge_box2) badge_box2.textContent = tally_box2
    if (badge_box3) badge_box3.textContent = tally_box3
    if (badge_box4) badge_box4.textContent = tally_box4
    if (badge_box5) badge_box5.textContent = tally_box5

    // Highlight active box in navigation based on URL
    const url_parameters = new URLSearchParams(window.location.search)
    const current_box = url_parameters.get('box')
    
    const first_box = document.getElementById("first-box")
    const second_box = document.getElementById("second-box")
    const third_box = document.getElementById("third-box")
    const fourth_box = document.getElementById("fourth-box")
    const fifth_box = document.getElementById("fifth-box")
    const nav_all_cards = document.getElementById("nav-all-cards")
    
    // Remove active class from all
    if (nav_all_cards) nav_all_cards.classList.remove('active')
    if (first_box) first_box.classList.remove('active')
    if (second_box) second_box.classList.remove('active')
    if (third_box) third_box.classList.remove('active')
    if (fourth_box) fourth_box.classList.remove('active')
    if (fifth_box) fifth_box.classList.remove('active')
    
    // Add active class to current selection
    if (current_box) {
        switch (parseInt(current_box)) {
            case 1:
                if (first_box) first_box.classList.add('active')
                break
            case 2:
                if (second_box) second_box.classList.add('active')
                break
            case 3:
                if (third_box) third_box.classList.add('active')
                break
            case 4:
                if (fourth_box) fourth_box.classList.add('active')
                break
            case 5:
                if (fifth_box) fifth_box.classList.add('active')
                break
        }
    } else {
        // No box selected - highlight All Cards
        if (nav_all_cards) nav_all_cards.classList.add('active')
    }
}
