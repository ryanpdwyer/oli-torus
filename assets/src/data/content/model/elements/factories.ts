import { normalizeHref } from 'components/editing/models/link/utils';
import {
  TableData,
  TableRow,
  ListItem,
  OrderedList,
  UnorderedList,
  Webpage,
  Hyperlink,
  Paragraph,
  Code,
  InputRef,
  Popup,
  Table,
  YouTube,
  Image,
  Audio,
} from 'data/content/model/elements/types';
import { Text } from 'slate';
import guid from 'utils/guid';

export function create<ModelElement>(params: Partial<ModelElement>): ModelElement {
  return Object.assign(
    {
      id: guid(),
      children: [{ text: '' }],
    } as any,
    params,
  ) as ModelElement;
}

// Helper functions for creating ModelElements
export const td = (text: string) =>
  create<TableData>({ type: 'td', children: [{ type: 'p', id: guid(), children: [{ text }] }] });

export const tr = (children: TableData[]) => create<TableRow>({ type: 'tr', children });

export const table = (children: TableRow[]) => create<Table>({ type: 'table', children });

export const li = () => create<ListItem>({ type: 'li' });

export const ol = () => create<OrderedList>({ type: 'ol', children: [li()] });

export const ul = () => create<UnorderedList>({ type: 'ul', children: [li()] });

export const youtube = (src: string) => create<YouTube>({ type: 'youtube', src });

export const webpage = (src: string) => create<Webpage>({ type: 'iframe', src });

export const link = (href = '') =>
  create<Hyperlink>({ type: 'a', href: normalizeHref(href), target: 'self' });

export const image = (src = '') => create<Image>({ type: 'img', src, display: 'block' });

export const audio = (src = '') => create<Audio>({ type: 'audio', src });

export const p = (children?: (InputRef | Text)[] | string) => {
  if (!children) return create<Paragraph>({ type: 'p' });
  if (Array.isArray(children)) return create<Paragraph>({ type: 'p', children });
  return create<Paragraph>({ type: 'p', children: [{ text: children }] });
};

export const code = (): Code => ({
  type: 'code',
  id: guid(),
  language: 'python',
  children: [{ type: 'code_line', id: guid(), children: [{ text: '' }] }],
});

export const inputRef = () => create<InputRef>({ type: 'input_ref' });

export const popup = () =>
  create<Popup>({
    type: 'popup',
    trigger: 'hover',
    content: [
      {
        type: 'p',
        children: [{ text: '' }],
        id: guid(),
      },
    ],
  });