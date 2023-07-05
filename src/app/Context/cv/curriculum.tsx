import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'

const CurriculumContext = createContext({})

export const CurriculumProvider = ({ children }: { children: ReactNode }) => {
  const [personalDetails, setPersonalDetails] = useState({})
  // const [about, setAbout] = useState('')
  // const [education, setEducation] = useState([])
  // const [skills, setSkills] = useState([])
  // const [experience, setExperience] = useState([])
  // const [certifications, setCertifications] = useState([])

  const handlePersonalDetailsChange = useCallback((data: any) => {
    setPersonalDetails(data)
  }, [])

  return (
    <CurriculumContext.Provider
      value={{ personalDetails, handlePersonalDetailsChange }}
    >
      {children}
    </CurriculumContext.Provider>
  )
}

export const useCurriculumContext = () => useContext(CurriculumContext)
