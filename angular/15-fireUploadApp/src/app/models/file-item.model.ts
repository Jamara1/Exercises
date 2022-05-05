export class FileItem {

  constructor(
    public file: File,
    public fileName: string = file.name,
    public url?: string,
    public isUpload: boolean = false,
    public progress: number = 0
  ) { }

}
