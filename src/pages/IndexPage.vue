<template>
    <q-page class="row items-center">
        <div class="container">
            <assigment />
            <after />
            <home-treatment />
            <recomendation />
            <handbook-modal />
        </div>
    </q-page>
</template>

<script setup lang="ts">
import Assigment from "src/components/session/Assigment.vue";
import After from "src/components/session/After.vue";
import HandbookModal from "src/components/HandbookModal.vue";
import Recomendation from "src/components/session/Recomendation.vue";
import HomeTreatment from "src/components/session/HomeTreatment.vue";
</script>
