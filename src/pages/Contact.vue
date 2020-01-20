<template>
  <section class="contact flex flex-wrap lg:flex-no-wrap mt-20 pb-24">
    <div class="w-full w-1/2 bg-gray-100 p-6 lg:p-12">
      <h1 class="font-bold mb-2 text-4xl">Vamos quebrar o gelo.</h1>
      <p class="text-gray-600">
        Nosso desafio é desenvolver o seu negócio com as melhores tecnologias, independente de ser uma startup, uma empresa de médio porte ou uma grande corporação, nos informe seus dados que entraremos em contato com você.
      </p>
      <form
        name="contact-form"
        class="flex flex-wrap mt-8"
        method="POST"
        enctype="multipart/form-data"
        :action="actionForm">
          <input type="hidden" name="_language" :value="$i18n.locale" />
          <input type="hidden" name="plan" :value="$route.query.plan" />

          <div class="w-full mb-8" v-for="field in form" :key="field.id">
            <component v-bind:is="field.component" v-bind="{...field.props}"  />
          </div>

          <app-button type="submit" bgColor="primary" class="mt-10">ENVIAR CONTATO</app-button>
      </form>
    </div>
    <div class="w-full w-1/2 p-2 lg:pl-20 mt-24 lg:mt-0 flex flex-wrap justify-start content-center">
      <h1 class="font-bold text-2xl">Mais informações</h1>
      <p class="text-gray-600 mt-2 mb-6">
        Se tiver mais alguma dúvida, deixe-nos saber, estamos sempre aqui.
      </p>
      <strong>
        Você também pode agendar uma conversa:
      </strong>
      <div class="w-full mt-8">
        <a href="#" class="text-xs rounded-full text-white bg-primary py-3 px-5">
          AGENDAR UMA CONVERSA
        </a>
      </div>
      <ul class="mt-20">
        <li class="flex items-center mb-12">
          <span class="rounded-full bg-accent p-3">
            <svg-icon name="map" height="25px" class="text-white fill-current" />
          </span>
          <a
            href="https://www.google.com/maps/place/Rua+Cyrillo+Bastos,+239+-+Lind%C3%A9ia,+Belo+Horizonte+-+MG,+30690-240/@-19.9811863,-44.0493656,21z/data=!4m5!3m4!1s0xa6be506e5e62e1:0x2db50a32c4387556!8m2!3d-19.9812433!4d-44.0492483"
            class="ml-4 text-sm text-gray-600 p-3 hover:bg-indigo-100"
            target="_blank">
            Rua Marechal do Carmo, 56 <br /> Mineirinho, Minas Gerais <br /> 00256-532
            <span class="sr-only">Ir para o mapa</span>
          </a>
        </li>
        <li class="flex items-center mb-12">
          <span class="rounded-full bg-accent p-3">
            <svg-icon name="phone" height="25px" class="text-white fill-current" />
          </span>
          <div class="flex flex-wrap md:flex-no-wrap ml-4 text-sm text-gray-600">
            <a href="tel:+553398854-5445" class="p-3 mr-2 hover:bg-indigo-100">+55 (33) 98854-5445</a>
            <a href="tel:+551198956-6111" class="p-3 hover:bg-indigo-100">+55 (11) 98956-6111</a>
          </div>
        </li>
        <li class="flex items-center mb-12">
          <span class="rounded-full bg-accent p-3">
            <svg-icon name="send" height="25px" class="text-white fill-current" />
          </span>
          <div class="flex flex-wrap md:flex-no-wrap ml-4 text-sm text-gray-600">
            <a href="mailto:contact@nyx.tc" class="p-3 mr-2 hover:bg-indigo-100">contact@nyx.tc</a> <br />
            <a href="mailto:email@nyx.tc" class="p-3 hover:bg-indigo-100">email@nyx.tc</a>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Contact',
  setup (_, { root }) {
    const actionForm = process.env.VUE_APP_ACTION_FORM
    const form = [
      {
        component: 'app-input',
        props: {
          id: 'id',
          label: 'Nome',
          placeholder: 'Jonh Rich',
          type: 'text',
          required: true
        }
      },
      {
        component: 'app-input',
        props: {
          id: 'email',
          label: 'Email',
          placeholder: 'email@email.com',
          type: 'email',
          required: true
        }
      },
      {
        component: 'app-input',
        props: {
          id: 'phone',
          label: 'Telephone',
          placeholder: '+55 (11) 93569-9658',
          type: 'tel',
          required: true
        }
      },
      {
        component: 'app-input',
        props: {
          id: 'project',
          label: 'Nome do seu projeto',
          type: 'text',
          required: true
        }
      },
      {
        component: 'app-textarea',
        props: {
          id: 'description',
          label: 'Explique um pouco sobre seu projeto',
          labelInfo: '(Links, caso tenha arquivos grandes enviar o link)',
          rows: 7,
          required: true
        }
      }
    ]

    return {
      form,
      actionForm
    }
  }
}
</script>

<style lang="scss"></style>
