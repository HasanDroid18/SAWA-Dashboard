import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService implements ErrorHandler {
  private networkErrorHandled = false;

  constructor(private messageService: MessageService) {}

  handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 0:
          if (!this.networkErrorHandled) {
            this.messageService.add({
              severity: 'error',
              summary: 'Network Error',
              detail:
                'Cannot connect to the server. Please check your internet connection or try again later.',
            });
            this.networkErrorHandled = true;
          }
          break;
        case 401:
        case 403:
          this.messageService.add({
            severity: 'error',
            summary: `Authentication Error ${error.status}`,
            detail: 'You are not authorized to access this resource.',
          });
          break;
        default:
          if (error.error && Array.isArray(error.error.errorList)) {
            error.error.errorList.forEach((err: any) => {
              this.messageService.add({
                severity: 'error',
                summary: `Error ${err.code}`,
                detail: err.description,
              });
            });
          } else {
            this.messageService.add({
              severity: 'error',
              summary: `Error ${error.status}`,
              detail: error.message || 'An unexpected error occurred.',
            });
          }
          break;
      }
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: error.message || 'An unexpected error occurred.',
      });
    }
    console.error(error);
  }
}
