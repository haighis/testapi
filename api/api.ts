export * from './application.service';
import { ApplicationService } from './application.service';
export * from './applicationShell.service';
import { ApplicationShellService } from './applicationShell.service';
export * from './artifact.service';
import { ArtifactService } from './artifact.service';
export * from './install.service';
import { InstallService } from './install.service';
export * from './item.service';
import { ItemService } from './item.service';
export * from './kind.service';
import { KindService } from './kind.service';
export * from './label.service';
import { LabelService } from './label.service';
export * from './setup.service';
import { SetupService } from './setup.service';
export * from './shellType.service';
import { ShellTypeService } from './shellType.service';
export const APIS = [ApplicationService, ApplicationShellService, ArtifactService, InstallService, ItemService, KindService, LabelService, SetupService, ShellTypeService];
