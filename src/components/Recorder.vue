<template>
<div>
    <div v-if="isSupported">
        <RecTimer 
            :seconds="responseTime.seconds" 
            :minutes="responseTime.minutes" 
            @stopRecording="toggleRecording" 
            v-show="!hasRecorded" 
        />

        <audio id="player" controls class="my-10" v-show="hasRecorded"></audio>
        <div v-if="hasRecorded" min-width="700">
            <v-textarea
                filled
                label="Type in your transcript here:"
                :value="transcript"
                full-width
            ></v-textarea>
            <v-btn 
                color="success"
                outlined
                x-large
            >
                UPLOAD
            </v-btn>
        </div>
    </div>
    <div v-else>
        Audio recording is not supported in your browser
    </div>
</div>
</template>

<script>
    import RecTimer from './RecTimer.vue';
    import { mapState, mapActions } from "vuex";

    export default {
        name: 'Recorder',
        components: { RecTimer },
        props: [],
        data: () => ({
            isSupported: true,
            transcript: "",
            constraints: {
                audio: true,
                video: false
            },
            mediaRecorder: null,
            chunks: [],
            blob: null
        }),
        computed: {
            ...mapState("promptStore", ["isRecording", "hasRecorded", "responseTime"]),
            btnColor() {
                return this.isRecording ? "error" : "success";
            }
        },
        methods: {
            ...mapActions("promptStore", ["setIsRecording", "setHasRecorded"]),
            toggleRecording() {
                if (!this.isRecording) {
                    this.setIsRecording(true);
                    this.startRecording();
                } else {
                    this.stopRecording();
                    this.setIsRecording(false);
                    this.setHasRecorded(true);
                }
            },
            startRecording() {
                console.log('Start recording');
                this.mediaRecorder.start();
                this.mediaRecorder.ondataavailable = ev => {
                    this.chunks.push(ev.data);
                }
            },
            stopRecording() {
                console.log('Stop recording');
                this.mediaRecorder.stop();
                this.mediaRecorder.onstop = ev => {
                    this.blob = new Blob(this.chunks, { 'type' : 'audio/wav;' });
                    this.chunks = [];
                    let audioURL = window.URL.createObjectURL(this.blob);
                    let audioSave = document.getElementById('player');
                    audioSave.src = audioURL;
                }
                console.log(this.mediaRecorder.state);
                this.mediaRecorder = null;
            }

        },
        mounted() {
            if (!navigator.mediaDevices && !navigator.mediaDevices.getUserMedia) {
                console.warn('Media Devices are not supported from your browser.');
                this.isSupported = false;
                return;
            }
            this.isSupported = true;

            navigator.mediaDevices.getUserMedia(this.constraints)
                .then(stream => {
                    this.mediaRecorder = new MediaRecorder(stream);
                    this.startRecording();
                })
                .catch(err => console.error(err));
        }
    }

</script>

<style>

</style>