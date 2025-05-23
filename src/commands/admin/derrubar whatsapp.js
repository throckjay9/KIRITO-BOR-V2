const { PREFIX } = require(`${BASE_DIR}/config`);
const {
  InvalidParameterError,
} = require(`${BASE_DIR}/errors/InvalidParameterError`);
const {
  activateAutoResponderGroup,
  deactivateAutoResponderGroup,
} = require(`${BASE_DIR}/utils/database`);

module.exports = {
  name: "auto-responder",
  description: "Ativo/desativo o recurso de derrubar whatsapp no grupo.",
  commands: ["derrubar whatsapp"],
  usage: `${PREFIX}derrubar whatsapp (1/0)`,
  /**
   * @param {CommandHandleProps} props
   * @returns {Promise<void>}
   */
  handle: async ({ args, sendReply, sendSuccessReact, remoteJid }) => {
    if (!args.length) {
      throw new InvalidParameterError(
        "Você precisa digitar 1 ou 0 (ligar ou desligar)!"
      );
    }

    const derrubarWhatsapp = args[0] === "1";
    const notDerrubartoWhatsapp = args[0] === "0";

    if (!derrubarWhatsapp && !notDerrubartoWhatsapp) {
      throw new InvalidParameterError(
        "Você precisa digitar 1 ou 0 (ligar ou desligar)!"
      );
    }

    if (derrubarWhatsapp) {
      activateDerrubarWhatsappGroup(remoteJid);
    } else {
      deactivateDerrubarWhatsappGroup(remoteJid);
    }

    await sendSuccessReact();

    const context = derrubar ? "ativado" : "desativado";

    await sendReply(`Recurso de derrubar whatsapp ${context} com sucesso!`);
  },
};
