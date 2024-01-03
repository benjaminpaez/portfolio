import cv from "../assets/profile/CurriculumVitae.pdf"

export const downloadCV = () => {
    const rutaPDF = cv
    const link = document.createElement("a")
    link.href = rutaPDF
    link.download = "CV-BenjaminPaez.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}