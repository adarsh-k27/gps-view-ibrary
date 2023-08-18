import * as toastr from 'toastr'
import { BehaviorSubject } from "rx";
import { toast } from "react-toastify";
import { toastOptions } from './constant';
// for global loader service
export const isLoading = new BehaviorSubject<boolean>(false);

export const isDialogOpen = new BehaviorSubject<any>({
  open: false,
  data: { message: "Are you Sure?", title: "" },
  cancelText: "Cancel",
  confirmText: "Okay",
  onConfirm: () => {},
});

export const forSuccess = (message: string) =>
  toastr.success(message, "Success");

export const forError = (message: string) => toastr.error(message, "Error");
export const forErrorToast=(message:string)=>toast.error(message,toastOptions)
export const forWarningToast= (message:string) => toast.warning(message,toastOptions)
export const forSuccessToast= (message:string) => toast.success(message,toastOptions)
export const forWarning = (message: string) =>
  toastr.warning(message, "Warning");
