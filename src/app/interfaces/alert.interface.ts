export interface Alert {
  id: number;
  type: 'success' | 'error' | 'notification';
  message: string;
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  isVisible: boolean;
}