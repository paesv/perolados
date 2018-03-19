<template>
    <div id="register-container">
        <!-- <h4>Pontuação : 0 | Vidas: 3</h4> -->

       {{selectedQuestion}}

        <!-- <button class="btn btn-primary">
            Shinoda
        </button>

        <button class="btn btn-primary">
            Criança
        </button> -->
    </div>
</template>

<script>
import gameService from "./GameService";

export default {
	data() {
		return {
			questions: [],
			selectedQuestion: {}
		};
	},

	methods: {
		getRandomQuestion() {
			this.selectedQuestion = this.questions[1]
		}
	},

	mounted() {
		gameService.getPerolas().then(data => {
			data.forEach(element => {
				this.questions.push(element.val());
			});
		});

		this.getRandomQuestion();
	}
};
</script>
