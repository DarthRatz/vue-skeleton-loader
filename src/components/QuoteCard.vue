<template>
    <div class="quote-card">
        <div class="quote-info">
            <p>{{ quoteData.quote }}</p>
            <h3>{{ quoteData.author }}</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Quote } from "../types/QuoteResponse";

const quoteId = Math.ceil(Math.random() * 100)
const quoteDataURL = `https://dummyjson.com/quotes/${quoteId}`;
const getQuoteData = await fetch(quoteDataURL);
const quoteData = ref<Quote>(await getQuoteData.json());
</script>

<style>
.quote-card {
    border-radius: 75%;
    background: #99e5ea;
    box-shadow:  20px  20px 60px #bebebe,
                -20px -20px 60px #ffffff;
    width: 100%;
    max-width: 700px;
    min-height: 180px;
    margin: 0 auto;
    padding: 30px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 20px;
    margin-top: 5rem;
}

.quote-info {
    width: 95%;
    float: right;
}

.quote-info span {
    text-transform: uppercase;
    color: #222;
    letter-spacing: 3px;
}

.quote-info h3 {
    margin: 10px 0;
    font-size: 1.5em;
    color: #222;
}

.quote-info p {
    line-height: 140%;
    color: #222;
}
</style>