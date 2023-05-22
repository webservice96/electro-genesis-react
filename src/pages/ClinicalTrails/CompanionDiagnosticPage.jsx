import React from 'react'
import Layout from '../../Layout/Main/Layout'
import CompanionDiagnosticsClinical from '../../components/ClinicalTrialsAllPage/CompanionDiagnostics/CompanionDiagnosticsClinical';
function CompanionDiagnosticPage() {
  return (
    <>
    <Layout className='bg-gray-pink'>
        <CompanionDiagnosticsClinical/>
    </Layout>
    </>
  )
}

export default CompanionDiagnosticPage;