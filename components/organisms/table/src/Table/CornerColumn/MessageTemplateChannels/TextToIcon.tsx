import {
  BellFill,
  HttpsFill,
  MailFill,
  MessageCircleFill,
  MicrosoftTeamsFill,
  TelegramFill,
  WhatsappFill,
} from '@avidkit/icons';

export enum ChannelsTypes {
  SMS = 'SMS',
  EMAIL = 'Email',
  TEAMS = 'Teams',
  HTTPS = 'HTTPS',
  TELEGRAM = 'Telegram',
  WHATSAPP = 'WhatsApp',
  NOTIFICATION = 'Notification',
}

export const textToIcon = (channelName: ChannelsTypes) => {
  switch (channelName) {
    case ChannelsTypes.TEAMS:
      return <MicrosoftTeamsFill />;
    case ChannelsTypes.EMAIL:
      return <MailFill />;
    case ChannelsTypes.SMS:
      return <MessageCircleFill />;
    case ChannelsTypes.TELEGRAM:
      return <TelegramFill />;
    case ChannelsTypes.WHATSAPP:
      return <WhatsappFill />;
    case ChannelsTypes.HTTPS:
      return <HttpsFill />;
    default:
      return <BellFill />;
  }
};
