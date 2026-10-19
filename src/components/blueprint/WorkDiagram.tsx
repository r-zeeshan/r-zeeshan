import { Fragment } from 'react';
import { Diagram, DiagramArrow, DiagramNode, DiagramStep } from './Diagram';
import Note from './Note';
import type { DiagramNode as NodeData, WorkDiagram as WorkDiagramData } from '@/lib/work';

/** Splits the node list into rows wherever a node carries an `after` note. */
function toRows(nodes: NodeData[]): NodeData[][] {
  const rows: NodeData[][] = [[]];
  nodes.forEach((n, i) => {
    rows[rows.length - 1].push(n);
    if (n.after && i < nodes.length - 1) rows.push([]);
  });
  return rows;
}

/** Binds an arrow to its node; the first node of a row has no arrow, so it needs no wrapper. */
function Step({ bound, size = 'sm', children }: { bound: boolean; size?: 'sm' | 'md'; children: React.ReactNode }) {
  return bound ? <DiagramStep size={size}>{children}</DiagramStep> : <>{children}</>;
}

/**
 * Draws a case study's own diagram (nodes from src/lib/work.ts). Decorative duplicate of nearby
 * text, so it is hidden from assistive tech. The small size is a single compact flow for cards;
 * the md size honours the handwritten notes and row breaks.
 */
export default function WorkDiagram({
  diagram,
  size = 'sm',
  enter = false,
}: {
  diagram: WorkDiagramData;
  size?: 'sm' | 'md';
  /** Stagger the nodes in left to right, then the notes. Hero only. */
  enter?: boolean;
}) {
  if (size === 'sm') {
    return (
      <div aria-hidden="true">
        <Diagram size="sm">
          {diagram.nodes.map((n, i) => (
            <Step key={n.label} bound={i > 0}>
              {i > 0 && <DiagramArrow kind={n.join} size="sm" />}
              <DiagramNode ai={n.ai} alert={n.alert} size="sm">
                {n.label}
              </DiagramNode>
            </Step>
          ))}
        </Diagram>
      </div>
    );
  }

  const rows = toRows(diagram.nodes);
  let index = 0;
  return (
    <div aria-hidden="true" className="flex flex-col gap-4">
      {rows.map((row, r) => {
        const last = row[row.length - 1];
        return (
          <Fragment key={r}>
            <Diagram>
              {row.map((n, i) => {
                const at = index++;
                return (
                  <Step key={n.label} bound={i > 0} size="md">
                    {i > 0 && <DiagramArrow kind={n.join} enter={enter ? at : undefined} />}
                    <DiagramNode ai={n.ai} alert={n.alert} sub={n.sub} enter={enter ? at : undefined}>
                      {n.label}
                    </DiagramNode>
                  </Step>
                );
              })}
            </Diagram>
            {last.after && (
              <Note size={22} enter={enter ? index : undefined}>
                {last.after}
              </Note>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
