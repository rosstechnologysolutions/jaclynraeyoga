
import Image from 'next/image'

import ClassScheduleCallToAction from '@/components/ClassScheduleCallToAction'
import HeaderImage from '../../public/prenatal-vs-traditional-yoga.jpeg'

export default function BlogArticle() {
  return (
    <>
		<div className="flex flex-col min-h-screen">
			<div className="container mx-auto">
        <div className="my-10">
          <h1 className="text-4xl">Prenatal Yoga Classes vs. Traditional Yoga Classes</h1>
          <h1>By: Jaclyn Ross</h1>
          <h1>April 16, 2023</h1>
        </div>
        <Image
							alt="picture of Jaclyn the yoga teacher"
							className="sm:float-left h-96 rounded-xl w-72 sm:mr-10 mx-auto"
							src={HeaderImage}
						>
						</Image>
        <div>

        </div>
        <div className="text-2xl">
          <p>
            Yoga has become increasingly popular in America and is often viewed as a positive activity for physical and mental health.  Perhaps, you are pregnant and your doctor has recommended you take a yoga class and you don&apos;t know where to begin. There are many different styles and varieties of yoga and if you are new to yoga it may be a bit confusing. Or maybe you have yoga experience and you are wondering if you should actually seek out a Prenatal Yoga class. So, what is the difference between a Prenatal Yoga class and a Traditional Yoga class?
          </p>
          <br />
          <p>
            A Prenatal Yoga class is specifically designed just for women who are expecting. The beauty of this is the community it creates and connects you to other women who are in a similar life stage. Having this supportive community of women can be 
            especially valuable for first-time mothers who may have many questions and concerns.
          </p>
          <br />
          <p>
            A prenatal yoga class is likely taught by a teacher who has had extra training hours and experience designing a safe yoga practice for all stages of pregnancy.  This makes a huge difference knowing you can attend the class and there is a very high likelihood you will be able to safely do all the postures or the teacher will have experience in modifying postures so you won&apos;t have to adjust on your own. For example, a traditional yoga class may have a lot of postures that take place on the belly or the back. These could be unsafe to do during later stages of pregnancy. A prenatal yoga class keeps the pregnant mother in mind and won&apos;t include those postures. A prenatal yoga class also often uses props such as bolsters and blocks to to support the body and ensure the poses are comfortable for mom.  All of these things allow the mother to simply enjoy the class.
          </p>
          <br />
          <p>
            A prenatal yoga class not only focuses on modified yoga poses that are safe and appropriate for pregnant women, but places an emphasis on pelvic floor and core work. Prenatal yoga classes often include exercises to strengthen the pelvic floor and core muscles, which can help to prepare the body for childbirth and reduce the risk of certain pregnancy-related complications.
          </p>
          <br />
          <p>
            Lastly, a prenatal yoga class will focus on mom connecting to baby and preparing for birth. Prenatal yoga classes often include meditations to connect to baby and breathing and relaxation techniques that can be used during labor and delivery to help manage pain and reduce stress.
          </p>
          <br />
          <p>
            In summary, prenatal yoga classes are specifically designed to meet the needs of pregnant women and offer community, modified   poses, pelvic floor and core work, the use of props, attention to breathing and relaxation techniques, and modifications for different stages of pregnancy. I look forward to seeing you on the mat! Namaste.
          </p>
        </div>
      
        </div>
        <ClassScheduleCallToAction />
      </div>
    </>
  )
}