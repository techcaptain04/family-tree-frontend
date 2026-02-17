import React from 'react';
import ReactFamilyTree from 'react-family-tree';
import nodes from './prins.json';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import FamilyNode from './FamilyNode';
import styles from './App.module.css';
import useDialog from './useDialog';
import ContactUsDialog from './ContactUsDialog';
import Footer from './Footer';

import './styles.css';

const myID = '0';
const WIDTH = 260;
const HEIGHT = 280;

const Familytree = () => {
  const [rootId, setRootId] = React.useState(myID);
  const [markHolucost, setMarkHolucost] = React.useState(false);
  const { Dialog, open: openDialog } = useDialog();
  //const onResetClick = React.useCallback(() => setRootId(myID), []);

  return (
    <ContactUsDialog>
      <div className={styles.root}>
        <div style={{ fontSize: 40, textAlign: 'center' }}>
          {'The '} {nodes[0].name} {' Family'}
          {markHolucost ? ' July 1942 – February 1944' : ' July 1942'}
        </div>

        {rootId !== myID && (
          <button
            onClick={() => setRootId(myID)}
            style={{
              width: 140,
              height: 30,
              transform: `translate(60px,-50px)`,
              color: 'black',
              backgroundColor: 'lightgray',
              fontSize: 20
            }}
          >
            Back to Start
          </button>
        )}

        <div className="appContainer">
          <TransformWrapper
            initialScale={0.4}
            minScale={0.2}
            maxScale={2}
            centerOnInit
            wheel={{ step: 0.1 }}
            doubleClick={{ disabled: true }}
          >
            <TransformComponent wrapperClass="treeWrapper">
              <ReactFamilyTree
                nodes={nodes}
                rootId={rootId}
                width={WIDTH}
                height={HEIGHT}
                canvasClassName={styles.tree}
                renderNode={(node) => (
                  <FamilyNode
                    key={node.id}
                    node={node}
                    isRoot={node.id === rootId}
                    onSubClick={setRootId}
                    openDialog={openDialog}
                    markHolucost={markHolucost}
                    style={{
                      width: WIDTH,
                      height: HEIGHT,
                      transform: `translate(${node.left * (WIDTH / 2)}px, ${
                        node.top * (HEIGHT / 2)
                      }px)`
                    }}
                  />
                )}
              />
            </TransformComponent>
          </TransformWrapper>
        </div>
        <Footer
          nodes={nodes}
          markHolucost={markHolucost}
          toggle={() => {
            setMarkHolucost((m) => !m); /*פה להחליף עץ  */
          }}
        />
        <Dialog />
      </div>
    </ContactUsDialog>
  );
};

export default Familytree;
