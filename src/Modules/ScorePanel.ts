import {ref} from 'vue';
class ScorePanel {
    static score = ref(0);
    static level = ref(1);
    maxLevel: number;
    levelUpScore: number;
    constructor(maxLevel: number = 10, levelUpScore: number = 5) {
        this.maxLevel = maxLevel;
        this.levelUpScore = levelUpScore;
    }

    levelUp() {
        if (ScorePanel.level.value < this.maxLevel) {
            ScorePanel.level.value += 1;
        }
    }

    addScore() {
        ScorePanel.score.value += 1;
        if (ScorePanel.score.value % this.levelUpScore === 0) {
            this.levelUp();
        }
    }
}

export default ScorePanel;