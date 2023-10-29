export interface ConfirmationDialogModel {
  title: string;
  message: string;
  agreeButtonLabel: string;
  notAgreeButtonLabel: string;
  agreeButtonFunction(): void;
  notAgreeButtonFunction(): void;
}
