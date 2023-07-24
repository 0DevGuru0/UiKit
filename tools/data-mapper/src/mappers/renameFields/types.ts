interface RenameConfig {
  currentName: string;
  newName: string;
}

export interface RenameFieldsConfig {
  renameConfigs: RenameConfig[];
}
