function myfbq(pixelId, trackType, contentObj = null) {
  var trackMethod = 'trackSingleCustom';

  switch (trackType) {
    case 'AddPaymentInfo':
    case 'AddToCart':
    case 'AddToWishlist':
    case 'CompleteRegistration':
    case 'Contact':
    case 'CustomizeProduct':
    case 'Donate':
    case 'FindLocation':
    case 'InitiateCheckout':
    case 'Lead':
    case 'PageView':
    case 'Purchase':
    case 'Schedule':
    case 'Search':
    case 'StartTrial':
    case 'SubmitApplication':
    case 'Subscribe':
    case 'ViewContent':
      trackMethod = 'trackSingle';
      break;
    default:
      trackMethod = 'trackSingleCustom';
      break;
  }

  if (contentObj != null) {
    if (contentObj?.event_id) {
      fbq(trackMethod, pixelId, trackType, contentObj, {eventID: contentObj.event_id});
    } else {
      fbq(trackMethod, pixelId, trackType, contentObj);
    }
  } else {
    fbq(trackMethod, pixelId, trackType);
  }
}