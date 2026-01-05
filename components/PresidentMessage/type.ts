export interface PresidentMessageProps {
  presidentName: string;
  title: string;
  organization: string;
  organizationAcronym: string;
  imageSrc: string;
  imageAlt?: string;
  message: MessageContent;
  slogan: string;
}

export interface MessageContent {
  greeting: string[];
  paragraphs: string[];
  closing: string;
}
