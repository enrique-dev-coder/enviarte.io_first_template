import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
      <p className="text-sm text-gray-500 mb-8">
        Fecha de última actualización: 23 de julio de 2025
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          1. Información que recopilamos
        </h2>
        <p>
          Podemos recopilar los siguientes datos personales cuando usas nuestros
          servicios:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Nombre completo</li>
          <li>Dirección de correo electrónico</li>
          <li>Número de teléfono</li>
          <li>Información de contacto de los invitados</li>
          <li>Fecha y lugar del evento</li>
          <li>Mensajes personalizados que incluyas en tus invitaciones</li>
          <li>Información de pago (si adquieres servicios de pago)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. Finalidad del uso de datos
        </h2>
        <p>Utilizamos tu información personal para:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Crear, personalizar y enviar tus invitaciones digitales</li>
          <li>Gestionar listas de invitados y confirmar asistencia (RSVP)</li>
          <li>Enviar recordatorios o actualizaciones del evento</li>
          <li>Proporcionar soporte técnico y atención al cliente</li>
          <li>Procesar pagos y emitir facturas</li>
          <li>Enviarte comunicaciones relacionadas con el servicio</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          3. Compartición de información
        </h2>
        <p>
          No compartimos tu información personal con terceros, salvo en los
          siguientes casos:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Proveedores de servicios tecnológicos</li>
          <li>Autoridades competentes, cuando sea requerido por ley</li>
          <li>
            En caso de fusión, adquisición o reestructuración de la empresa
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Seguridad</h2>
        <p>
          Implementamos medidas técnicas y organizativas razonables para
          proteger tus datos personales. Sin embargo, ningún sistema es 100%
          seguro.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Derechos del usuario</h2>
        <p>Como titular de tus datos personales, tienes derecho a:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Acceder a tus datos</li>
          <li>Rectificarlos</li>
          <li>Cancelarlos cuando ya no sean necesarios</li>
          <li>Oponerte al uso de tus datos para finalidades no esenciales</li>
        </ul>
        <p className="mt-2">
          Puedes ejercer estos derechos enviando un correo a:{" "}
          <a
            href="mailto:correo@tudominio.com"
            className="text-blue-600 underline"
          >
            correo@tudominio.com
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Uso de cookies</h2>
        <p>
          Nuestro sitio web puede utilizar cookies para mejorar la experiencia
          del usuario. Puedes configurar tu navegador para rechazarlas si lo
          deseas.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          7. Cambios a esta política
        </h2>
        <p>
          Nos reservamos el derecho de modificar esta política de privacidad en
          cualquier momento. Notificaremos cualquier cambio importante a través
          del sitio web o por correo electrónico.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">8. Contacto</h2>
        <p>
          Si tienes dudas sobre esta política o el uso de tus datos, puedes
          contactarnos en:
        </p>
        <p className="mt-2">
          <strong>InvitandoFácil</strong>
          <br />
          <br />
          Sitio web:{" "}
          <a
            href="https://www.invitandofacil.com"
            className="text-blue-600 underline"
          >
            www.invitandofacil.com
          </a>
          <br />
          Teléfono: +52 8441753173
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
