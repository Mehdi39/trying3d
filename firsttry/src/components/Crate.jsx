/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/crate.glb 
Author: Ryztiq (https://sketchfab.com/Ryztiq)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cunning-ham-pig-stores-crate-1aecaf70c5f54efab3fa438b5ba6f12d
Title: Cunning-Ham Pig Stores Crate
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Crate(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('./models/crate.glb')
    const { actions } = useAnimations(animations, group)

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="BoxDonefbx" rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="Object_4">
                                    <primitive object={nodes._rootJoint} />
                                    <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                                    <group name="Object_8" rotation={[-Math.PI / 2, 0, 0]} />
                                    <group name="Object_10" rotation={[-Math.PI / 2, 0, 0]} />
                                    <group name="Object_12" position={[5.958, 1.779, 0.91]} rotation={[0, -Math.PI / 2, 0]} />
                                    <group name="Frame001" rotation={[-Math.PI / 2, 0, 0]} />
                                    <group name="LargeWood001" rotation={[-Math.PI / 2, 0, 0]} />
                                    <group name="Metal001" rotation={[-Math.PI / 2, 0, 0]} />
                                    <group name="Ropes001" position={[5.958, 1.779, 0.91]} rotation={[0, -1.571, 0]} />
                                    <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Wood2RopesMat} skeleton={nodes.Object_7.skeleton} />
                                    <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.Wood1Mat} skeleton={nodes.Object_9.skeleton} />
                                    <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.MetalMat} skeleton={nodes.Object_11.skeleton} />
                                    <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.Wood2RopesMat} skeleton={nodes.Object_13.skeleton} />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('./models/crate.glb')