import useContentful from './Utilities/contentfulHooks';
import React, { useEffect, useState } from 'react';
import ImageContainer from './Components/ImageContainers/ImageContainer';
import Tilt from './Components/Tilt/Tilt';
import TiltButton from './Components/Buttons/TiltButton';


export default function Test () {
	const { getStaffMembers } = useContentful();
	const [staffMembers, setStaffMembers] = useState([]);

    const generateDepartmentColor = (department) => {
        if (department === "Brand") {
            return "#F0BEC9"

        } else if (department === "Marketing") {
            return "#F27250"

        } else if (department === "Technology") {
            return "#84A9B5"

        } else {
            return "#000000"

        }
    };

    useEffect(() => {
		getStaffMembers()
			.then(
				(response) => { 
					const newArray = response || [];

					setStaffMembers(newArray)
				}
			)
			.catch(error => {})
	}, []);

    return (
        <section id="staffMemberSection">
            <div className='inner'>
                { 
                    staffMembers.map((staffMember, key) => {
                        const departmentColor = generateDepartmentColor(staffMember.department);

                        return (
                            <div className='StaffCard' key={ key }>
                                <div className='inner'>
                                    <div className='staffImage'>
                                        <ImageContainer data={{ imageSource : staffMember.headshot.file.url, imageAlt : staffMember.headshot.title }} />
                                    </div>

                                    <div className='staffInfo'>
                                        <Tilt data={{ maxRotation : 3, maxSkew : 3, backgroundColor: "#000" }} />

                                        <div className='inner'>
                                            <p>{ staffMember.name }</p>

                                            <TiltButton data={{ 
                                                buttonCopy : staffMember.jobTitle,
                                                buttonType : "function",
                                                buttonFunction : () => {},
                                                tiltBackgroundColor: departmentColor,
                                                tiltMaxRotation : 4,
                                                tiltMaxSkew : 4
                                            }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}