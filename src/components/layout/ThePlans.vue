<template>
  <section class="plans">
    <div :class="classContainer">
      <h2 class="text-center text-4xl text-black font-bold">Planos suporte</h2>
      <p class="text-center text-lg text-gray-600 mt-2 px-6">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam.
      </p>
      <div class="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>

      <div class="flex flex-wrap justify-between my-20">
        <div
          class="w-full md:w-1/2 my-4 rounded-lg px-4"
          v-for="plan in plans.data"
          :key="plan.title">
          <div class="relative w-full h-full rounded-lg bg-white shadow-nyx border border-solid border-gray-200">
            <div
              class="absolute top-0 left-0 w-full text-sm rounded-t-lg bg-accent text-gray-100 font-bold uppercase py-4 text-center"
              v-show="plan.highlight">
              Mais popular
            </div>
            <div class="flex flex-col h-full justify-between bg-white text-black p-4 lg:p-10 rounded-lg overflow-hidden">
              <div class="w-full my-8">
                <h3 class="text-2xl font-bold uppercase p-3 pb-0 pt-6 text-center">{{ plan.title }}</h3>
                <span class="block text-sm text-accent text-center pb-6 mt-3">R$ {{  plan.price }}</span>
              </div>

              <div class="w-full flex flex-wrap self-start">
                <ul class="w-full">
                  <li
                    class="flex items-start mb-4"
                    v-for="(included, index) in plan.included"
                    :key="`bronze-included-${index}`">
                    <div>
                      <svg-icon name="right" width="20px" height="20px" class="text-green-500" />
                    </div>
                    <p class="text-gray-700 text-sm ml-3" v-html="included"></p>
                  </li>
                </ul>
                <ul class="w-full">
                  <li
                    class="flex items-start mb-3"
                    v-for="(notIncluded, index) in plan.notIncluded"
                    :key="`bronze-not-included-${index}`">
                    <div>
                      <svg-icon name="wrong" width="20px" height="20px" class="text-red-500" />
                    </div>
                    <p class="text-gray-700 text-sm ml-3" v-html="notIncluded"></p>
                  </li>
                </ul>
              </div>
              <div class="w-full p-8 uppercase">
                <button
                  class="mt-3 text-lg font-bold bg-primary w-full text-gray-100 rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700">
                  Escolher
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full mt-4 mx-4 p-10 rounded-lg bg-white shadow-nyx border border-solid border-gray-200 overflow-hidden">
          <h3 class="text-2xl font-bold uppercase">Mais sobre os planos</h3>
          <ul class="flex flex-wrap list-disc mt-12 pl-4">
            <li class="w-full md:w-1/2 pr-12 mb-4">
              Suporte inicia 24 horas após a confirmação do pagamento da mensalidade. Caso tenha um atraso de 15 dias no pagamento o suporte será cancelado.
            </li>
            <li class="w-full md:w-1/2">
              Caso a contratante deseja cancelar o serviço, deverá avisar 30 dias antes tendo que pagar a proporção de dias de suporte.
            </li>
            <li class="w-full md:w-1/2 pr-12 mb-4">
              Daremos descontos para pacotes que possam ser enviados no mesmo boleto, nota fiscal e relatório: <br>
              - 2 projetos -> 10% de desconto sobre a mensalidade de cada um. <br />
              - 3 ou mais projetos -> 15% de desconto sobre a mensalidade de cada um.
            </li>
            <li class="w-full md:w-1/2">
              Indicação: Para cada indicação que fizer um pacote, enquanto a indicação manter o serviço, 10% do valor da nova mensalidade será convertido para desconto na mensalidade da pessoa que indicou.
              <br /><br />
              <b class="front-bold">Exemplo:</b>
              <br />
              - Uma contratada no valor de 3300/mes indicou uma empresa que assinou o plano diamente 5000/mes). <br />
              - A contratada receberá um desconto de 500 reais no valor mensal enquanto a nova assinatura se manter. <br />
              - As propostas acima possuem uma validade de 30 dias.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'ThePricing',
  props: {
    withContainer: {
      type: Boolean,
      default: true
    }
  },
  setup (props) {
    const classContainer = {
      'container': props.withContainer,
      'nyx-container': props.withContainer
    }
    let plans = ref({})

    import('@/data/plans').then(data => {
      plans.value = data.default
    })

    return {
      plans,
      classContainer
    }
  }
}
</script>

<style lang="scss">
.pricing {
  &__icon {
    width: 40px;
  }
}
</style>
