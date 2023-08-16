<template>
    <div>
        <SubHeader title="Experiencia"/>
        <section class="sm:mt-10 mt-6 ml-2 md:text-base text-sm textColor flex flex-col gap-8">
            <ol class="flex flex-col gap-8 ml-10 -mt-3 z-0">
                <li class="timeline-item relative flex flex-col">
                    <h4 class="font-medium text-gray-50"> Empatha Boga </h4>
                    <div class="">
                        <span class="textColor2 text-sm">2013 — 2015</span>
                        <p class="textColor opacity-60"> Kebumen </p>
                    </div>
                    <p class="opacity-95"> Waiter &amp; Helper </p>
                </li>
                <li class="timeline-item relative flex flex-col">
                    <h4 class="font-medium text-gray-50"> Empatha Boga </h4>
                    <div class="">
                        <span class="textColor2 text-sm">2013 — 2015</span>
                        <p class="textColor opacity-60"> Kebumen </p>
                    </div>
                    <p class="opacity-95"> Waiter &amp; Helper </p>
                </li>
                <li class="timeline-item relative flex flex-col">
                    <h4 class="font-medium text-gray-50"> Empatha Boga </h4>
                    <div class="">
                        <span class="textColor2 text-sm">2013 — 2015</span>
                        <p class="textColor opacity-60"> Kebumen </p>
                    </div>
                    <p class="opacity-95"> Waiter &amp; Helper </p>
                </li>
                <li class="timeline-item relative flex flex-col">
                    <h4 class="font-medium text-gray-50"> Empatha Boga </h4>
                    <div class="">
                        <span class="textColor2 text-sm">2013 — 2015</span>
                        <p class="textColor opacity-60"> Kebumen </p>
                    </div>
                    <p class="opacity-95"> Waiter &amp; Helper </p>
                </li>
                <li class="timeline-item relative flex flex-col">
                    <h4 class="font-medium text-gray-50"> Empatha Boga </h4>
                    <div class="">
                        <span class="textColor2 text-sm">2013 — 2015</span>
                        <p class="textColor opacity-60"> Kebumen </p>
                    </div>
                    <p class="opacity-95"> Waiter &amp; Helper </p>
                </li>
                
            </ol>
        </section>
    </div>
</template>

<script>
import SubHeader from '@/components/SubHeader.vue';
export default {
    components:{
        SubHeader,
    },
};
</script>

<style scoped>
.timeline-item::before {
    background: #383838;
    content: "";
    height: calc(100% + 50px);
    left: -30px;
    position: absolute;
    top: -25px;
    width: 1px
}
.timeline-item:after {
    background: #f39c12;
    border-radius: 50%;
    box-shadow: 0 0 0 4px #383838;
    content: "";
    left: -33px;
    position: absolute;
    top: 8px;
    height: 8px;
    width: 8px
}
</style>