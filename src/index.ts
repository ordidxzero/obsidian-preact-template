/* eslint-disable prettier/prettier */
/* eslint-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Plugin, ItemView, WorkspaceLeaf } from 'obsidian';
import { html, render } from 'htm/preact';
import DiceRoller from './ui/DiceRoller';

const ICON_NAME = 'languages';

const PLUGIN_TITLE = 'Plugin Title';

const VIEW_TYPE = 'react-view';

class MyReactView extends ItemView {

  getViewType(): string {
    return VIEW_TYPE;
  }

  getDisplayText(): string {
    return 'Dice Roller';
  }

  getIcon(): string {
    return 'calendar-with-checkmark';
  }

  async onOpen(): Promise<void> {
    const props = {num: 1}

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render(html`<${DiceRoller} props=${props} />`, (this as any).contentEl);
  }
}

export default class ReactStarterPlugin extends Plugin {
  private view: MyReactView;

  async onload(): Promise<void> {
    this.registerView(VIEW_TYPE, (leaf: WorkspaceLeaf) => (this.view = new MyReactView(leaf)));

    this.app.workspace.onLayoutReady(this.onLayoutReady.bind(this));
  }

  onLayoutReady(): void {
    if (this.app.workspace.getLeavesOfType(VIEW_TYPE).length) {
      return;
    }
    this.app.workspace.getRightLeaf(false).setViewState({
      type: VIEW_TYPE,
    });
  }
}
