<template>
  <div class="callback" :class="{ callbackShow: $store.state.policy.show }" >
    <div class="callback-bg" @click="$store.commit('policy/hiddenPopup')" ></div>
    <div class="callback-wrapper">
      <div class="callback-top">
        <div class="top-close">
          <img src="~/assets/img/close.svg" @click="$store.commit('policy/hiddenPopup')"  alt="">
        </div>
        <div class="top-title">
          <span v-if="lang === 'ru'">Политика конфиденциальности</span>
          <span v-if="lang === 'en'">Privacy Policy</span>
          <span v-if="lang === 'port'">Politica de confidencialidade</span>
        </div>
      </div>
      <div class="callback-form">
        <div v-if="lang === 'ru'" class="text">
          <p>
          Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности) действует в отношении всей информации, которую сайт ИП Титаева Юлиана Валерьевна, расположенный на доменном имени www.freedom-pr.com, может получить о Пользователе во время использования сайта www.freedom-pr.com, программ и продуктов этого сайта.

          Мы собираем, используем и охраняем персональные данные, которые Вы предоставляете нам при использовании нашего сайта (далее – «сайт») с любого устройства и при коммуникации с нами в любой форме, в соответствии с данной Политикой.

          Используя наш сайт и предоставляя нам свои персональные данные, Вы даете согласие на обработку Ваших персональных данных в соответствии с данной Политикой.
          </p>
          <p>1. Основные понятия</p>
          <p>
          «Персональные данные» – любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу.

          «Обработка персональных данных» – осуществление любых действий или совокупности действий в отношении Ваших персональных данных, включая сбор, запись, систематизацию, накопление, хранение, обновление и изменение, извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление и уничтожение, как с использованием, так и без использования систем автоматизированной обработки персональных данных.
          </p>
          <p>2. Данные, которые мы собираем</p>

          <p>Мы собираем:</p>
          <p>
          персональные данные, которые Вы предоставляете нам при заполнении информационных полей на нашем сайте, в том числе при заполнении контактной формы, при подписке на новостную рассылку, при регистрации на мероприятия;
          персональные данные и другую информацию, содержащуюся в сообщениях, которые Вы нам направляете;
          персональные данные, которые Вы предоставляете через наш сайт вакансий и стажировок;
          технические данные, которые автоматически передаются устройством, с помощью которого Вы используете наш сайт, в том числе технические характеристики устройства, IP-адрес, информация, сохраненная в файлах «cookies», которые были отправлены на Ваше устройство, информация о браузере, дата и время доступа к сайту, адреса запрашиваемых страниц и иная подобная информация;
          иные данные о Вас, которые Вы пожелали оставить на нашем сайте.
          </p>
          <p>3. Цели обработки данных</p>
          <p>
          Мы обрабатываем Ваши персональные данные исключительно для тех целей, для которых они были предоставлены, в том числе:

          предоставления Вам информации о Компании, наших услугах и мероприятиях;
          осуществление приема и отправки заказа on-line;
          коммуникации с Вами, когда Вы обращаетесь к нам;
          организации Вашего участия в проводимых нами мероприятиях и опросах;
          направления Вам наших новостных материалов;
          выполнения полномочий и обязанностей, возложенных на Компанию законодательством Российской Федерации;
          для других целей с Вашего согласия.
          </p>
          <p>
          Мы обрабатываем технические данные для:

          обеспечения функционирования и безопасности нашем сайте;
          улучшения качества нашего сайта.
          Мы не размещаем Ваши персональные данные в общедоступных источниках. Мы не принимаем решений, порождающих для Вас юридические последствия или иным образом затрагивающих Ваши права и законные интересы на основании исключительно автоматизированной обработки персональных данных.
          </p>
          <p>4. Ваши права</p>
          <p>
          Обеспечение защиты Ваших прав и свобод в сфере персональных данных – важное условие работы Компании.

          Чтобы обеспечить защиту Ваших прав и свобод, по Вашей просьбе мы:

          подтвердим, обрабатываем ли мы Ваши персональные данные и предоставим Вам возможность с ними ознакомиться в течение 30 дней с даты получения Вашего запроса;
          сообщим Вам об источнике получения и составе Ваших персональных данных, которые мы обрабатываем;
          сообщим Вам о правовых основаниях, целях, сроках и способах обработки Ваших персональных данных;
          внесем необходимые изменения в Ваши персональные данные, если Вы подтвердите, что они неполные, неточные или неактуальные, в течение 7 рабочих дней с даты получения подтверждения, и уведомим Вас о внесенных изменениях;
          сообщим Вам об осуществленной или о предполагаемой трансграничной передаче Ваших персональных данных;
          сообщим Вам наименование и место нахождения организаций, которые имеют доступ к Вашим персональным данным и которым могут быть раскрыты Ваши персональные данные с Вашего согласия;
          сообщим Вам наименование или фамилию, имя, отчество и адрес лиц, которым с Вашего согласия может быть поручена обработка Ваших персональных данных; уведомим Вас о порядке осуществления Ваших прав при обработке нами Ваших персональных данных;
          исключим Вас из рассылки наших новостных материалов;
          прекратим обработку Ваших персональных данных в течение 30 дней с даты получения отзыва согласия, если для обработки персональных данных не будет иных правовых оснований, предусмотренных законодательством Российской Федерации;
          прекратим обработку Ваших персональных данных, если будет подтверждено, что мы их обрабатываем неправомерно, и уведомим Вас о предпринятых мерах;
          уничтожим Ваши персональные данные, если будет подтверждено, что они незаконно получены или не соответствуют заявленным целям обработки, в течение 7 рабочих дней с даты получения соответствующего подтверждения, и уведомим Вас о предпринятых мерах;
          ответим на Ваши вопросы, касающиеся Ваших персональных данных, которые мы обрабатываем.
          </p>
          <p>5. Как Вы можете связаться с нами</p>

          <p>Вы можете обратиться к нам с запросом, касающимся обработки Ваших персональных данных, направив нам письмо через форму обратной связи с темой письма «Запрос о персональных данных» (либо «Отзыв согласия на обработку персональных данных» в случае отзыва согласия на обработку персональных данных).
          </p>
          <p>6. Безопасность персональных данных</p>
          <p>
          Для обеспечения безопасности Ваших персональных данных при их обработке мы принимаем необходимые и достаточные правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, их уничтожения, изменения, блокирования, копирования, предоставления, распространения, а также от иных неправомерных действий в отношении персональных данных.

          В целях обеспечения адекватной защиты Ваших персональных данных мы проводим оценку вреда, который может быть причинен в случае нарушения безопасности Ваших персональных данных, а также определяем актуальные угрозы безопасности Ваших персональных данных при их обработке в информационных системах персональных данных.

          В Компании приняты локальные акты по вопросам безопасности персональных данных. Сотрудники Компании, имеющие доступ к персональным данным, ознакомлены с настоящей Политикой и локальными актами по вопросам безопасности персональных данных.
          </p>
          <p>7. Прекращение обработки персональных данных</p>
          <p>
          Мы прекращаем обработку Ваших персональных данных:

          при наступлении условий прекращения обработки персональных данных или по истечении установленных сроков;
          по достижении целей их обработки либо в случае утраты необходимости в достижении этих целей;
          по Вашему требованию, если обрабатываемые персональные данные являются незаконно полученными или не являются необходимыми для заявленной цели обработки;
          в случае выявления неправомерной обработки персональных данных, если обеспечить правомерность обработки невозможно;
          по истечении срока действия Вашего согласия на обработку персональных данных или в случае отзыва Вами такого согласия, если для обработки персональных данных не будет иных правовых оснований, предусмотренных законодательством Российской Федерации; в случае ликвидации Компании.
          </p>
          <p>8. Cookies</p>

          <p>
          Мы используем файлы «cookies». Файлы «cookies» – это небольшие текстовые файлы, размещаемые на жестких дисках Ваших устройств во время использования различных сайтов, предназначенные для содействия в настройке пользовательского интерфейса в соответствии с Вашими предпочтениями.

          Большинство браузеров позволяют отказаться от получения файлов «cookies» и удалить их с жесткого диска устройства.
          </p>
          <p>9. Ссылки на сайты третьих лиц</p>
          <p>
          На нашем сайте могут быть размещены ссылки на сторонние сайты и службы, которые мы не контролируем. Мы не несем ответственности за безопасность или конфиденциальность любой информации, собираемой сторонними сайтами или службами.
          </p>
          <p>10. Изменение Политики</p>
          <p>
          Мы можем обновлять Политику по мере необходимости. Мы рекомендуем Вам периодически проверять актуальность данной Политики. Продолжая пользоваться нашим сайтом после изменения Политики, Вы подтверждаете согласие с внесенными изменениями.
          </p>
        </div>
        <div v-if="lang === 'en'" class="text">
          <p>
          This Privacy Policy in relation to personal data (“the Privacy Policy”) applies to all information that the website of Individual Entrepreneur Titaeva Yuliana Valerievna, domain name www.freedom-pr.com, can receive about the User of the website www.freedom-pr.com, programs and products of this site.

          We collect, use and protect personal data which you provide us when accessing our website (“the Website”) from any device and when communicating with us in any form, pursuant to this Policy.

          Using our Website and providing your personal data to us, you consent to the processing of your Personal Data in accordance with this Policy.
          </p>
          <p>1. Main Definitions</p>
          <p>
          “Personal Data” means any information relating to directly or indirectly identified or identifiable individual.

          “Personal Data Processing” means any actions or a combination of actions with your Personal Data performed with or without automatic means of personal data processing, including collection, recording, arrangement, accumulation, storage, updating and alteration, extraction, usage, transfer (dissemination, provisioning, access), anonymization, blocking, deletion, destruction.
          </p>
          <p>2. Data Collected By Us</p>

          <p>We collect:</p>
          <p>
          Personal Data provided by you when filling out information fields on our Website, in particular, when filling out the contact form, when subscribing to newsletters, when registering for events;
          Personal Data and other information contained in messages sent by you to us;
          Personal Data you submit through our job vacancies and probation website;
          Technical data that is automatically transmitted by the device through which you access our Website, including device specifications, IP address, information contained in cookies sent to your device, browser information, date and time the Website has been accessed, accessed URLs and other similar information;
          Other data about you that you wish to leave on our Website.
          </p>
          <p>3. Data Processing Purposes</p>
          <p>
          We process your Personal Data solely for the purposes for which they have been provided, in particular:

          Providing you with information about the Company, our services and events;
          Accepting and submitting online orders;
          Communication with you when you contact us;
          Arranging your participation in our events and surveys;
          Sending you our news;
          Performing the duties assigned to the Company by the legislation of the Russian Federation;
          For other purposes, subject to your consent.
          We process technical data for:

          Ensuring Website operation and safety;
          Improving the quality of our Website.
          We do not publish your Personal Data in public sources of information. We do not take decisions entailing legal consequences for you or otherwise affecting your rights and legitimate interests exclusively on the basis of automated processing of the Personal Data.
          </p>
          <p>4. Your Rights</p>
          <p>
          Ensuring the protection of your rights and freedoms in the field of personal data is an important condition of the Company’s operation.

          To ensure the protection of your rights and freedoms, at your request we will:

          Confirm whether we process your Personal Data and give you an opportunity to familiarize yourself with them within 30 days upon the receipt of your relevant request;
          Inform you about the source and composition of your Personal Data being processed by us;
          Inform you about legal grounds, purposes, timeframes and methods of processing of your Personal Data;
          Make the necessary alterations your Personal Data if you confirm that they are incomplete, inaccurate or out-of-date, within 7 business days upon the receipt of the confirmation, and inform you of the alternations made;
          Inform you about actual or expected cross-border transfer of your Personal Data;
          Inform you about the name and location of organizations that have access to your Personal Data and to which your Personal Data may be disclosed subject to your consent;
          Inform you about the name or surname, name, patronymic and address of the persons who may be entrusted with the processing of your personal data, subject to your consent; notify you about the procedure for exercising your rights when we process your Personal Data;
          Remove your details from our mailing list;
          Terminate the processing of your Personal Data within 30 days upon the revocation of the previously granted consent, if no other legal grounds for the processing of the Personal Data are stipulated by the legislation of the Russian Federation;
          Terminate the processing of your Personal Data, if it is determined that we process them unlawfully, and inform you of the measures taken;
          Destroy your Personal Data if it is determined that they have been illegally received or do not correspond to the stated processing purposes within 7 business days upon the receipt of the relevant confirmation, and inform you of the measures taken;
          Answer your questions regarding your Personal Data being processed by us.
          </p>
          <p>5. Ways of Contacting Us</p>

          <p>
          You can make a request to us regarding the processing of your Personal Data by sending us a letter via the feedback form with a subject of “Request relating to Personal Data” (or “Revocation of the Consent to Personal Data Processing” in case of revocation of the consent to the processing of the Personal Data).
          </p>
          <p>6. Personal Data Safety</p>
          <p>
          To ensure safety of your Personal Data being processed, we take the necessary and sufficient legal, organizational and technical measures to protect the Personal Data from unauthorized or accidental access, destroying, alteration, blocking, copying, provisioning, dissemination and other illegal actions related to the Personal Data.

          To ensure due protection of your Personal Data, we assess the damage that may be caused in case of a breach of safety of your Personal Data and determine the current threats to the safety of your Personal Data when processing them in personal data information systems.

          The Company has adopted local legal acts on personal data safety. The Company employees who have access to the Personal Data have been familiarized with this Policy and local legal acts on personal data safety.
          </p>
          <p>7. Termination of Personal Data Processing</p>
          <p>
          We terminate the processing of your Personal Data:

          Subject to the occurrence of conditions for the termination of Personal Data processing or upon expiration of the specified time periods;
          After the purpose of their processing is achieved or if there is no further need in achieving these purposes;
          Upon your request, if the processed Personal Data have been illegally received or if they are not required for the declared purpose of processing;
          If it is determined that the Personal Data are processed improperly, and it is impossible to ensure legal processing;
          Upon expiration of your consent to Personal Data processing or in case of your revocation of such consent, if no other legal grounds for the processing of the Personal Data are stipulated by the legislation of the Russian Federation;
          If the company is wound up.
          </p>
          <p>8. Cookies</p>
          <p>
          We use cookies. Cookies are small text files that are placed on the hard drives of your devices while you access different websites. Cookies assist in user interface customization according to your preferences.

          Most browsers allow the user to reject cookies and remove them from the device’s hard drive.
          </p>
          <p>9. Links to Third-Party Websites</p>
          <p>
          Our Website may contain links to third-party websites and services which we do not control. We are not responsible for the security or confidentiality of any information collected by third-party websites or services.
          </p>
          <p>10. Changes to the Policy</p>
          <p>
          We may update the Policy as needed. We recommend that you periodically check the relevance of this Policy. Using the Website after changes to the Policy are made, you confirm your consent to the changes.
          </p>
        </div>
        <div v-if="lang === 'port'" class="text">
          <p>
          A presente Política de confidencialidade em relação aos dados pessoais (doravante – Política de confidencialidade) é vigente em relação a toda informação, que o site de EI Titaieva Juliana Valerievna, situado no domínio www.freedom-pr.com, poderá receber sobre o Usuário durante o uso do site www.freedom-pr.com, programas e produtos deste site.

          Coletamos, usamos e protegemos os dados pessoais, que você nos oferece ao visitar o nosso site  (doravante – «site») a partir de qualquer dispositivo e durante a comununicação conosco em qualquer forma, de acordo com a Política presente.

          Usando o nosso site e nos fornecendo seus dados pessoais, você aceita o processamento de seus dados pessoais em conformidade com a Política presente.
          </p>
          <p>1. Conceitos básicos</p>
          <p>
          "Dados pessoais" - qualquer informação relacionada direta ou indiretamente a uma pessoa física específica ou identificável.

          "Processamento de dados pessoais" - a implementação de quaisquer ações ou um conjunto de ações em relação aos seus dados pessoais, incluindo coleta, registro, sistematização, acumulação, armazenamento, atualização e modificação, extração, uso, transferência (distribuição, fornecimento, acesso), despersonalização, bloqueio, exclusão e destruição, com ou sem uso de sistemas automatizados de processamento de dados pessoais.
          </p>
          <p>2. Dados que coletamos</p>

          <p>Nós coletamos:</p>
          <p>
          dados pessoais que você nos fornece ao preencher os campos de informação no nosso site, inclusive ao preencher um formulário de contacto, ao subscrever newsletter, ao registrar-se para eventos;
          dados pessoais e outras informações contidas nas mensagens que você nos envia;
          dados pessoais fornecidos por meio de nosso site de vagas e estágios;
          dados técnicos que são transmitidos automaticamente pelo dispositivo do qual você acessa nosso site, inclusive as características técnicas do dispositivo, endereço IP, informações armazenadas nos cookies que foram enviados ao seu dispositivo, informações do browser, data e hora de acesso ao site, os endereços das páginas solicitadas e outras informações semelhantes;
          outros dados sobre você que deseja deixar em nosso site.
          </p>
          <p>3. Finalidades do processamento de dados</p>
          <p>
          Processamos seus dados pessoais exclusivamente para os fins para os quais foram fornecidos, inclusive:

          fornecer-lhe informações sobre a Empresa, nossos serviços e eventos;
          recebimento e envio de pedidos on-line;
          comunicação com você quando você entra em contato;
          organizar sua participação em nossos eventos e questionários;
          enviando nossos materiais de notícias;
          cumprimento dos poderes e obrigações atribuídos à Companhia pela legislação da Federação da Rússia;
          para outros fins com o seu consentimento.
          Processamos dados técnicos para:

          garantir o funcionamento e a segurança do nosso site;
          melhorar a qualidade do nosso site.
          Não publicamos seus dados pessoais em fontes públicas. Não tomamos decisões que possam ressultar em consequências jurídicas para você ou de alguma outra forma afetar seus direitos e interesses legítimos com base no processamento exclusivamente automatizado de dados pessoais.

          </p>
<p>
          4. Seus direitos
</p>
          <p>
          Garantir a proteção dos seus direitos e liberdades na área de dados pessoais é uma condição importante do trabalho da Companhia.

          Para garantir a proteção de seus direitos e liberdades, a seu pedido, nós:

          confirmaremos se estamos processando seus dados pessoais e oferecemos a oportunidade de conhecê-los dentro de 30 dias a partir da data de recebimento de sua solicitação;
          informaremos sobre a fonte de recebimento e a conteúdo de seus dados pessoais que processamos;
          informaremos sobre a base legal, objetivos, termos e meios de processamento de seus dados pessoais;
          faremos as alterações necessárias nos seus dados pessoais, se você confirmar que estão incompletos, inexatos ou irrelevantes, no prazo de 7 dias úteis a partir da data de recebimento da confirmação, e notificaremos sobre as alterações feitas;
          informaremos sobre a transferência transfronteiriça realizada ou prevista dos seus dados pessoais;
          iremos informar o nome e a loalização das organizações que têm acesso aos seus dados pessoais e às quais os seus dados pessoais podem ser revelados com o seu consentimento;
          comunicaremos o nome ou sobrenome, nome próprio, patronímico e moradia das pessoas que, com o seu consentimento, podem ser encarregadas de processamento dos seus dados pessoais; notificaremos sobre a ordem de exército de seus direitos quando processarmos seus dados pessoais;
          excluiremo-lo da lista de destinatários de nossos materiais informativos;
          interromperemos o processamento dos seus dados pessoais no prazo de 30 dias a partir da data de recebimento da retirada do consentimento, a menos que haja outros motivos legais para o processamento de dados pessoais previstos pela legislação da Federação da Rússia;
          interromperemos o processamento dos seus dados pessoais se for confirmado que os estamos processando ilegalmente e notificaremos sobre as medidas tomadas;
          destruiremos seus dados pessoais se for confirmado que foram obtidos ilegalmente ou não correspondem aos fins indicados para processamento, no prazo de 7 dias úteis a contar da data de recepção da confirmação correspondente, e iremos notificá-lo sobre as medidas tomadas;
          responderemos às suas perguntas sobre os seus dados pessoais que processamos.

          </p>

          <p>5. Como pode nos contatar</p>
          <p>
          Você pode entrar em contato conosco e nos dirigir uma solicitação de processamento de seus dados pessoais, enviando uma carta por meio do formulário de feedback com o assunto "Solicitação de dados pessoais" (ou "Revogação do consentimento para o processamento de dados pessoais" em caso de revogação do consentimento para o processamento de dados pessoais)
          </p>
          <p>6. Segurança de dados pessoais</p>
          <p>
          Para garantir a segurança dos seus dados pessoais durante o processamento, tomamos as medidas legais, organizacionais e técnicas necessárias e suficientes para proteger os dados pessoais contra o acesso não autorizado ou acidental aos mesmos, sua destruição, alteração, bloqueio, cópia, fornecimento, distribuição, assim como outras ações ilegais em relação aos dados pessoais.

          A fim de garantir a proteção adequada de seus dados pessoais, avaliamos os danos que podem ser causados ​​em caso de violação da segurança de seus dados pessoais e também determinamos as ameaças atuais à segurança de seus dados pessoais ao processá-los em sistemas de informação de dados pessoais.

          A Empresa adotou atos locais sobre a segurança de dados pessoais. Os funcionários da empresa que têm acesso a dados pessoais estão familiarizados com esta Política e os atos locais sobre as questões de segurança de dados pessoais.
          </p>

          <p>7. Término de processamento de dados pessoais</p>
          <p>
          Paramos de processar seus dados pessoais:

          Ao iniciarem as condições para o encerramento de procesamento de dados pessoais ou ao terminar o prazo estabelecido;
          ao alcançar as metas de processamento de dados ou ao não haver mais necessidade de alcançar essas metas;
          a seu pedido, caso os dados pessoais processados ​​forem obtidos ilegalmente ou não forem necessários para a finalidade declarada de processamento;
          caso for revelado o processamento ilegal de dados pessoais, se for impossível garantir a legalidade do processamento;
          ao terminar o prazo do seu consentimento para o processamento de dados pessoais ou se você revogar tal consentimento, caso não houver outra base legal para o processamento de dados pessoais, prevista pela legislação da Federação da Rússia; em caso de liquidação da Companhia.
          </p>

          <p>8. Cookies</p>
          <p>
          Usamos os arquivos «cookies». Cookies são pequenos arquivos de texto, localizados nos discos rígidos de seus dispositivos quando você acessa vários sites, projetados para ajudá-lo na configuração da interface do usuário de acordo com suas preferências.

          A maioria dos browsers permite recusar de receber os arquivos «cookies» e os exclui do disco rígido do seu dispositivo.
          </p>
          <p>9. Links para sites de terceiros</p>
          <p>
          Nosso site pode conter links para sites e serviços de terceiros, que não controlamos. Não somos responsáveis ​​pela segurança ou privacidade de qualquer informação coletada por sites ou serviços de terceiros.
          </p>
          <p>10. Mudança de política</p>
          <p>
          Podemos atualizar a Política conforme necessário. Recomendamos que você verifique periodicamente a relevância desta Política. Ao continuar a usar nosso site após alterar a Política, você aceita as alterações feitas.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Policy",
  props: ['lang'],
}
</script>

<style lang="less" scoped>
.callbackShow{
  visibility: visible !important;
  opacity: 1 !important;
}
.callback{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s;
  justify-content: center;
  &-success{
    background: #fff;
    position: relative;
    z-index: 200;
    max-width: 795px;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    .success-title{
      text-align: center;
      span{
        font-weight: 800;
        font-size: 25px;
        text-transform: uppercase;
        color: #000000;
        text-align: center;
      }
    }
  }
  &-wrapper{
    background: #fff;
    position: relative;
    z-index: 200;
    max-width: 795px;
    height: 90vh;
    overflow: hidden scroll;
    width: 100%;
    .callback-top{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 58px;
      flex-flow: row wrap;
      .top-close{
        width: 100%;
        text-align: right;
        padding-bottom: 20px;
        img{
          cursor: pointer;
        }
      }
      .top-title{
        span{
          font-weight: 800;
          font-size: 25px;
          text-transform: uppercase;
          color: #000000;
        }
      }
    }
    .callback-form{
      padding: 0 58px 58px;
      .form-input{
        margin-bottom: 30px;
        input{
          width: 100%;
          font-size: 18px;
          line-height: 18px;
          color: #171717;
          border: 0;
          border-bottom: 1px solid #171717;
          padding-bottom:6px;
          padding-top: 9px;
          &::placeholder{
            font-size: 18px;
            line-height:18px;
            color: #171717;
          }
        }
      }
      .form-textarea{
        margin-bottom: 30px;
        textarea{
          width: 100%;
          font-size: 18px;
          line-height: 18px;
          color: #171717;
          height: 22px;
          border: 0;
          border-bottom: 1px solid #171717;
          font-family: 'Muller';
          &::placeholder{
            font-size: 18px;
            line-height:18px;
            color: #171717;
            font-family: 'Muller';
          }
        }
      }
      .form-checkbox{
        .checkbox-title{
          padding-bottom: 36px;
          span{
            font-size: 20px;
            line-height: 20px;
          }
        }
        .checkbox-item{
          margin-bottom: 25px;
          > label{
            display: flex;
            flex-direction: row;
            cursor: pointer;
          }
          input[type="checkbox"]{
            display: none;
          }
          input[type="checkbox"]:checked{
            + label{
              .checkbox-item__check{
                span{
                  &::before{
                    opacity: 1 !important;
                  }
                }
              }
            }
          }
          &__name{
            flex: 1;
            padding-left: 15px;
            span{
              font-size: 20px;
              line-height: 20px;
              color: #171717;
            }
          }
          &__check{
            flex-basis: 18px;
            span{
              width: 17px;
              height: 17px;
              display: flex;
              content: '';
              position: relative;
              justify-content: center;
              align-items: center;
              border: 1px solid #000000;
              &::before{
                width: 11px;
                height: 11px;
                display: block;
                content: '';
                background: #F37137;
                transition: all 0.4s;
                opacity: 0;
              }
            }
          }
        }
      }
      .form-btn{
        margin-top: 42px;
        button{
          font-weight: 700;
          font-size: 16px;
          color: #171717;
          padding: 0;
          margin: 0;
          background: transparent;
          border: 0;
          position: relative;
          width: max-content;
          &:before{
            width: 0%;
            height: 5px;
            background: #171717;
            display: block;
            content: '';
            position: relative;
            top: -5px;
            transition: all 0.4s;
          }
          &:hover{
            &:before{
              width: 100%;
            }
          }
        }
      }
      .form-policy{
        margin-top: 24px;
        &__text{
          font-weight: 300;
          font-size: 16px;
          line-height: 16px;
          color: #979797;
          a{
            color: inherit;
          }
        }
      }
    }
  }
  &-bg{
    background: rgba(0,0,0,.5);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
@media (min-width: 1330px) and (max-width: 1470px) {
  .callback{
    &-wrapper{
      zoom: .8;
    }
  }
}
@media (max-width: 600px){
  .callback{
    max-width: 100%;
    &-success{
      width: 90%;
    }
    &-wrapper{
      max-width: 95%;
      height: 70vh;
      .callback-top{
        padding: 15px;
        .top-title{
          width: 70%;
          span{
            font-size: 20px;
          }
        }
        .top-img{
          width: 30%;
          img{
            max-width: 100%;
          }
        }
      }
      .callback-form{
        padding: 0 15px 15px;
        .form-input{
          margin-bottom: 20px;
          input{
            width: calc(100% - 20px);
          }
        }
        .form-textarea{
          textarea{
            border-radius: 0;
            appearance: none;
            height: auto;
            width: calc(100% - 20px);
          }
        }
        .form-policy{
          &__text{
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>
