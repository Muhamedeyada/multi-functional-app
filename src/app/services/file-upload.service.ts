import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private fileTypeRegex = /^audio\/(mp3|wav|mpeg|x-m4a|ogg)$/;

  constructor() {}

  isAudioFile(file: File): boolean {
    return this.fileTypeRegex.test(file.type);
  }

  getFileSizeInMB(file: File): number {
    return file.size / (1024 * 1024);
  }

  validateFile(file: File): { valid: boolean; message?: string } {
    if (!this.isAudioFile(file)) {
      return {
        valid: false,
        message: 'Only audio files (MP3, WAV, M4A, OGG) are supported.',
      };
    }

    const fileSize = this.getFileSizeInMB(file);
    if (fileSize > 10) {
      return {
        valid: false,
        message: 'File size should not exceed 10MB.',
      };
    }

    return { valid: true };
  }
}
