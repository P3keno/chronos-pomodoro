self.onmessage = function (event) {
  console.log('WORKER recebeu:', event.data);

  switch (event.data) {
    case 'FAVOR': {
      self.postMessage('Sim, posso fazer isso!');
      break
    }
    case 'FALA_OI': {
      self.postMessage('OK: OI!');
      break
    }
    case 'FECHAR': {
      self.postMessage('TA BOM, VOU FECHAR');
      self.close();
      break
    }
    default:
      self.postMessage('Não entendi a mensagem: ');
  }
};
