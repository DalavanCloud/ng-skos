/**
 * @ngdoc overview
 * @name ng-skos
 * @description
 *
 * ng-skos is an AngularJS module to work with terminologies, based on the 
 * Simple Knowledge Organization System (SKOS). In short, the module supports 
 * <b>concepts</b> (based on 
 * {@link http://www.w3.org/TR/skos-primer/#secconcept SKOS Concept), 
 * <b>terminologies</b> (based on 
 * {@link http://www.w3.org/TR/skos-primer/#secscheme SKOS Concept Schemes}),
 * and <b>mappings</b> (based on 
 * {@link http://www.w3.org/TR/skos-reference/#mapping SKOS mapping properties).
 * Concept collections for grouping and sorting concepts are not supported yet. 
 *
 * See {@link http://www.w3.org/2004/02/skos/} for more information about SKOS.
 *
 * A <b>concept</b> in ng-skos is a JSON object with the following keys:
 *
 * <dl>
 * <dt>uri
 * <dd>URI of the concept, 
 *     given as string
 * <dt>prefLabel
 * <dd>object that maps language tags to preferred labels,
 *     each given as string
 * <dt>altLabel
 * <dd>object that maps language tags to unordered arrays of alternative labels,
 *     each given as string
 * <dt>notation
 * <dd>partly ordered array of notations, 
 *     each given as string. The first notation might be used as primary 
 *     notation but multiple notations might also be used equivalently. The data
 *     type is assumed to be undefined or implicitly known. To support multiple 
 *     notations of different type, additional concept keys might be introduced
 *     in a later version of ng-skos.
 * <dt>narrower
 * <dd>...
 * <dt>broader
 * <dd>...
 * <dt>related
 * <dd>...
 * <dt>ancestors
 * <dd>...
 * <dt>inScheme
 * <dd>unordered array of terminologies,
 *     each given either as string with the URI of the terminology, or as
 *     terminology object.
 * </dl>
 *
 * A <b>terminology</b> in ng-skos is a JSON object with the following keys:
 *
 * <dl>
 * <dt>uri
 * <dd>URI of the terminology
 * <dt>prefLabel
 * <dd>an object that maps language tags to preferred names of the terminology,
 *     each given as string.
 * <dt>altLabel
 * <dd>...
 * <dt>notation
 * <dd>... (e.g. acronym)
 * <dt>topConcepts
 * <dd>unordered array of strings with concept URIs and/or concept objects.
 * </dl>
 *
 * A <b>mapping</b> in ng-skos is a JSON object with keys yet-to-be defined.
 *
 * All keys are optional, but an empty object should better be replaced by 
 * <tt>null</tt>. Missing keys may indicate that the corresponding properties
 * is not known (open world). To explicitly state for instance that a concept 
 * has no notation (closed world), set it no <tt>null</tt> or to an empty array.
 *
 * See also {@link skos-provider} to look up concepts and terminologies by URI 
 */
var ngSKOS = angular.module('ngSKOS',['ngSanitize']);
ngSKOS.value('version', '0.0.1');
